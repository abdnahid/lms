import { auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { TitleForm } from "./_components/title-form";
import { DescriptionForm } from "./_components/description-form";
import prisma from "@/lib/prismaDB";
import { IconBadge } from "@/components/common/IconBadge";
import { ImageUploadForm } from "./_components/ImageUploadForm";
import { CategoryForm } from "./_components/CategoryForm";
import PriceForm from "./_components/PriceForm";
import { AttachmentForm } from "./_components/AttachmentForm";

const CourseIdPage = async ({ params }: { params: { courseId: string } }) => {
  const { userId } = auth();

  if (!userId) {
    return redirect("/");
  }

  const course = await prisma.course.findUnique({
    where: {
      id: params.courseId,
      userId,
    },
    include: {
      attachments: true,
    },
  });

  if (!course) {
    return redirect("/");
  }
  const categories = await prisma.category.findMany();

  const requiredFields = [
    course.title,
    course.description,
    course.imageUrl,
    course.price,
    course.categoryId,
  ];

  const totalFields = requiredFields.length;
  const completedFields = requiredFields.filter(Boolean).length;

  const completionText = `(${completedFields} / ${totalFields})`;

  return (
    <>
      {/* {!course.isPublished && (
        <Banner
          label="This course is unpublished. It will not be visible to the students."
        />
      )} */}
      <div className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-y-2">
            <h1 className="text-2xl font-medium">Course setup</h1>
            <span className="text-sm text-slate-700 dark:text-slate-400">
              Complete all fields {completionText}
            </span>
          </div>
          {/* <Actions
            disabled={!isComplete}
            courseId={params.courseId}
            isPublished={course.isPublished}
          /> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          <div>
            <div className="flex items-center gap-x-2">
              <IconBadge iconName="dashboard" size="sm" variant="default" />
              <h2 className="text-xl">Customize your course</h2>
            </div>
            <TitleForm initialData={course} courseId={course.id} />
            <DescriptionForm initialData={course} courseId={course.id} />
            <ImageUploadForm initialData={course} courseId={course.id} />
            <CategoryForm
              categories={categories}
              courseId={params.courseId}
              category={course.categoryId || undefined}
            />
          </div>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge iconName="list" />
                <h2 className="text-xl">Course chapters</h2>
              </div>
              {/* <ChaptersForm
                initialData={course}
                courseId={course.id}
              /> */}
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge iconName="dollar" />
                <h2 className="text-xl">Sell your course</h2>
              </div>
              <PriceForm initialData={course} courseId={course.id} />
            </div>
            <div>
              <div className="flex items-center gap-x-2">
                <IconBadge iconName="file" />
                <h2 className="text-xl">Resources & Attachments</h2>
              </div>
              <AttachmentForm initialData={course} courseId={course.id} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CourseIdPage;
