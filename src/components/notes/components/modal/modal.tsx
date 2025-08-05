export default function Modal() {
  return (
    <div className="w-1/5 h-max border-2 border-purple-500 rounded-lg absolute left-40 p-3">
      <div className="flex flex-col gap-2 w-full">
        <label>Title</label>
        <input className="w-full border border-gray-500 p-2 outline-none text-gray-500 focus:ring-2 ring-purple-600" />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label>Summary</label>
        <textarea
          className="w-full border border-gray-500 p-2 outline-none text-gray-500 focus:ring-2 ring-purple-600"
          rows={12}
        />
      </div>
      <div className="flex flex-col gap-2 w-full">
        <label>Category</label>
        <select
          className="w-full border border-gray-500 p-2 outline-none text-gray-500 focus:ring-2 ring-purple-600"
          name=""
          id=""
        >
          <option value="work">✒Work</option>
          <option value="personal">🙇‍♂️Personal</option>
          <option value="ideas">🔎Ideas</option>
          <option value="study">📕Study</option>
        </select>
      </div>
      <div className="flex justify-end gap-3 p-4">
        <button>cancle</button>
        <button className="bg-red-500 text-white p-2 rounded-md">Save</button>
      </div>
    </div>
  );
}
