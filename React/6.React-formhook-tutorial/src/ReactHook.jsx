import { useForm } from "react-hook-form";

const ReactHook = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  console.log("Errors ", errors);

  function formData(data) {
    console.log("Print", data);
  }
  return (
    <div>
      <form action={handleSubmit(formData)}>
        <div>
          <label>Name</label>
          <input
            type="text"
            {...register("name", {
              required: "Name is Required!",
              minLength: {
                value: 2,
                message: "Minimum 2 character are required",
              },
              maxLength: {
                value: 4,
                message: "Maximum 4 character are required",
              },
            })}
          />
          <p>{errors?.name?.message}</p>
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
              pattern: { value: /^\$+@\S+$/i, message: "Ivalid Email Format" },
            })}
          />
          <p>{errors?.email?.message}</p>
        </div>
        <h4>Password Field is assignment</h4>
        <div>
          <label>Age</label>
          <input
            type="number"
            {...register("age", {
              required: "Age is required",
              min: {
                value: 18,
                message: "Age should be minimum 18",
              },
              max: {
                value: 60,
                message: "Age should not be greater then 60",
              },
            })}
          />
          <p>{errors?.age?.message}</p>
        </div>
        <div>
          <label>Gender</label>
          <input
            type="radio"
            value="Male"
            {...register("gender", { required: "Gender is required" })}
          />Male
          <input
            type="radio"
            value="Female"
            {...register("gender", { required: "Gender is required" })}
          />Female
          <p>{errors?.gender?.message}</p>
        </div>
        <div>
            <label>Skills</label>
            <input type="checkbox" {...register("skills")} value={'react'}/>React
            <input type="checkbox" {...register("skills")} value={'nodejs'}/>Nodejs
            <p>{errors?.skills?.message}</p>
        </div>
        <div>
            <label>Country</label>
            <select {...register("country", {required:"Country is required"})}>
                <option value="India">India</option>
                <option value="USA">USA</option>
            </select>
            <p>{errors?.country?.message}</p>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReactHook;
