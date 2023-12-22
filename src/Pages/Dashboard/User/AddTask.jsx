import moment from "moment";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import useAlert from "../../../Hooks/useAlert";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
export const AddTask = () => {
  const alert = useAlert();
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const userEmail = user?.email;
  const [priority, setPriority] = useState();
  const priorityOptions = [
    { value: "Priority", label: "Priority" },
    { value: "low", label: "low" },
    { value: "moderate", label: "moderate" },
    { value: "high", label: "high" },
  ];
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  //   handle priority

  //   create or updata a biodata
  const handleEditBiodata = async (data) => {
    const { title, description, deadline } = data;
    const deadlineMiliSec = moment(deadline).valueOf();
    const payload = {
      title,
      description,
      deadline: deadlineMiliSec,
      priority: priority.value,
      email: userEmail,
    };

    try {
      const { data: result } = await axiosPrivate.post(
        "/task-tracker/v1/tasks",
        payload
      );

      const isCreated = result._id ? true : false;

      if (isCreated) {
        alert(`You have added task successfully!`, "success");
      }
    } catch (err) {
      if (err) {
        alert(`You have not  saved and pulished biodata!`, "error");
      }
    }
  };
  return (
    <SectionWrapperSmall>
      <SectionHeader title="Add Task" />
      <form
        className="card-body p-0"
        onSubmit={handleSubmit(handleEditBiodata)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
          <div className="form-control ">
            <label className="label">
              <p className="label-text text-desc-color font-medium">
                Title <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <input
              type="text"
              placeholder="Task Title"
              className="input input-bordered rounded-none  capitalize"
              {...register("title", { required: true })}
            />
            {errors.title && <p className="text-red-500">Title is required.</p>}
          </div>
          <div className="form-control">
            <label className="label">
              <p className="label-text text-desc-color font-medium">
                Date of Birth <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <input
              type="date"
              placeholder="Deadline"
              className="input input-bordered rounded-none  capitalize"
              {...register("deadline", { required: true })}
            />
            {errors.deadline && (
              <p className="text-red-500"> Deadline is required.</p>
            )}
          </div>
          <div className="form-control ">
            <label className="label">
              <p className="label-text text-desc-color font-medium">
                Description <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <textarea
              type="textarea"
              placeholder="Description"
              className="input input-bordered rounded-none "
              {...register("description", { required: true })}
            />
            {errors.description && (
              <p className="text-red-500">Description is required.</p>
            )}
          </div>

          <div className="form-control">
            <label className="label">
              <p className="label-text text-desc-color font-medium">
                Priority <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <Select
              className="capitalize "
              defaultValue={priorityOptions[0]}
              onChange={setPriority}
              options={priorityOptions}
            />
          </div>
        </div>
        <div className="form-control  mt-10  items-center ">
          <button className="btn btn-primary  bg-primary-color border-none hover:bg-secondary-color text-white font-medium text-base px-8 md:px-10  rounded-full">
            Save
          </button>
        </div>
      </form>
    </SectionWrapperSmall>
  );
};

export default AddTask;
