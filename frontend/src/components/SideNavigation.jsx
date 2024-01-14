const SideNavigation = ({ items, onClick, selectedItemId }) => {
  return (
    <nav className="flex flex-col bg-gray-800 w-1/4 h-full p-4">
      <ul>
        {items?.map((item) => (
          <li
            key={item.id}
            className={`cursor-pointer p-2 ${
              selectedItemId === item.id ? "bg-gray-700" : ""
            }`}
            onClick={() => onClick(item.id)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideNavigation;
