import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import Title from "../../../Components/Shared/Title";

const UserHome = () => {
  return (
    <section>
      <Title title="User Home" />
      <SectionWrapperSmall>
        <SectionHeader title="Overall Statistics" />
        <h1>User Home</h1>
      </SectionWrapperSmall>
    </section>
  );
};

export default UserHome;
