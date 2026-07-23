const TodoItems = () => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div className="flex flex-1 item-center cursor-pointer">
        <img
          className="w-7"
          src="https://img.icons8.com/m_outlined/512/FD7E14/checked--v3.png"
          alt=""
        />
        <p className="text-slate-700 ml-4 text-[17px]">Learn Coding</p>
      </div>

      <img
        className="w-3.5"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2fQTObygOx3TQvdzFHPVd2eZvl2sAaFJ8BrHnvysFQ&s=10"
        alt=""
      />
    </div>
  );
};

export default TodoItems;
