import ProfileItem from "./ProfileItem";

/**
 * ProfileItems
 * * return a group of ProfileItem component
 * @prop items: an array of items with the props of ProfileItem component
 */
const ProfileItems = ({ items }) => {
  return (
    <ul>
      {items.map((props) => (
        <ProfileItem {...props} />
      ))}
    </ul>
  );
};

export default ProfileItems;
