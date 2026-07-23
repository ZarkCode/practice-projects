import TodoItems from "./TodoItems";

const Todo = () => {
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* title */}
      <div className="flex items-center mt-7 gap-2">
        <img
          src="https://play-lh.googleusercontent.com/oE7aUpS05eX1YaHkfK-iFZ35xZ8ksuZDK31HGV857LkMIZqg-nIoAWO6SfnN40t3oFqr4BkLGyLNpo7KOGbsBw"
          className="w-7 border rounded"
          alt=""
        />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* inputbox  */}
      <div className="flex item-center my-7 bg-gray-200 rounded-full">
        <input
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button className="border-none rounded-full bg-[#fb8829] w-32 h-14 text-white text-lg font-medium cursor-pointer">
          ADD +
        </button>
      </div>

      {/* todo list */}
      <div>
        <TodoItems />
      </div>
    </div>
  );
};

export default Todo;
