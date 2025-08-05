export default function Main() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between">
        <button className="bg-purple-600 text-white rounded-lg p-2">Add Notes</button>
        <select className="border border-gray-500 rounded-lg p-2">
          <option value={'All'}>All</option>
          <option value={'important'}>important</option>
          <option value={'Normal'}>Normal</option>
        </select>
      </div>
      <div className="w-full h-full border-2 border-yellow-500 flex justify-center items-center">
        <span className="text-orange-500 text-2xl font-bold">Not Notes found!</span>
      </div>
    </div>
  );
}
