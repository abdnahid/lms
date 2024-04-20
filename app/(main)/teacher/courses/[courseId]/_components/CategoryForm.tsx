"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import IconText from "@/components/common/IconText";
import Combobox from "@/components/common/ComboBox";
import { Category } from "@prisma/client";

const categorySchema = z.object({
  category: z.string().min(1, {
    message: "Category is required",
  }),
});

export const CategoryForm = ({
  category,
  courseId,
  categories,
}: {
  category?: string;
  courseId: string;
  categories: Category[];
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [currentCategory, setCurrentCategory] = useState<string | undefined>(
    category
  );

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof categorySchema>) => {
    try {
      await axios.patch(`/api/courses/${courseId}`, {
        categoryId: currentCategory,
      });
      toast.success("Course category is updated");
      toggleEdit();
      router.refresh();
    } catch (error: any) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        toast.error(`Server responded with ${error.response.status} error`);
      } else if (error.request) {
        // The request was made but no response was received
        toast.error("No response received from server");
      } else {
        // Something happened in setting up the request that triggered an Error
        toast.error(`Error: ${error.message}`);
      }
    }
  };

  return (
    <div className="mt-6 rounded-md p-4 bg-cardBg dark:bg-cardBg-dark shadow-md space-y-3">
      <div className="font-medium flex items-center justify-between">
        Course Category
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Cancel</>
          ) : (
            <IconText iconName="pencil" label="Edit category" />
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className="text-sm mt-2 dark:text-gray-300">
          {currentCategory
            ? categories.find((cat) => cat.id === currentCategory)?.name
            : "No Category"}
        </p>
      )}
      {isEditing && (
        <>
          <Combobox
            handleChange={(categoryId) => setCurrentCategory(categoryId)}
            options={categories.map((category) => {
              return { label: category.name, value: category.id };
            })}
            selectedVal={category}
          />
          <Button
            type="button"
            onClick={() => {
              if (currentCategory) {
                onSubmit({ category: currentCategory });
              }
            }}
          >
            Save
          </Button>
        </>
      )}
    </div>
  );
};
