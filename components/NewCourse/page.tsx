import styles from "./NewCourse.module.css";

export const NewCourse = () => {
  return (
    <div>
      <div className="p-6 bg-gray-300 shadow-sm rounded-lg">
        <div className="text-xl mb-2 font-bold">New Course</div>
        <form className="space-y-3">
          <label title="Title">
            <div className="mb-1">Title</div>
            <input
              placeholder="Enter course title"
              className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
              // Register: course title
            />
            <div className="text-red-600 text-sm mt-1">
              {/* Error: Course title */}
            </div>
          </label>
          <ManageChapters />
          <div className="text-red-600 text-sm mt-1">
            {/* Error: Course chapters */}
          </div>
          <button
            className="px-4 py-2 bg-blue-600 rounded-lg text-white"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const ManageChapters = () => {
  return (
    <div className="space-y-4">
      {/* Loop through chapter fields */}
      <div className="p-6 bg-gray-200 shadow-lg rounded-lg space-y-3">
        <div className="flex justify-between">
          <div className="text-lg mb-2 font-semibold">Chapters</div>{" "}
          <button
            type="button"
            className="text-red-400 text-xs underline underline-offset-4"
          >
            Remove chapter
          </button>
        </div>

        <label title={"Title"}>
          <div className="mb-1">Chapter title</div>
          <input
            className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
            placeholder="Enter chapter title..."
            // Register: chapter title
          />
          <div className="text-red-600">{/* Error: Chapter title */}</div>
        </label>
        <ManageNotes chapterIndex={1} />
        <div className="text-red-600 text-sm mt-1">
          {/* Error: Chapter notes */}
        </div>
      </div>
      <button
        type="button"
        className="text-gray-600 text-center w-full underline underline-offset-4 py-2"
      >
        add chapter
      </button>
    </div>
  );
};

const ManageNotes = ({ chapterIndex }: { chapterIndex: number }) => {
  return (
    <div className="space-y-4">
      {/* Loop through notes fields  */}
      <div className="py-4 bg-white p-6 rounded-lg shadow-xl">
        <div>
          <div className="flex justify-between">
            <div className="mb-2 font-semibold">Note</div>
            <button
              type="button"
              className="text-red-400 text-xs underline underline-offset-4"
            >
              Remove note
            </button>
          </div>
          <label title={"Title"} className="inline-block">
            <div className="mb-1">Content</div>
            <input
              placeholder="Enter note"
              className="border-2 border-gray-600  rounded-lg px-2 py-1 bg-transparent"
              //   Register: Chapter notes content
            />
            <div className="text-red-600">
              {/* Error: Chapter notes content */}
            </div>
          </label>
        </div>
      </div>
      <button
        type="button"
        className="text-gray-600 text-center w-full underline underline-offset-4 py-2"
      >
        add note
      </button>
    </div>
  );
};
