import React from "react";

interface Language {
  name: string;
  color: string;
}

interface Props {
  title: string;
  description: string;
  languages: Language[];
  onViewClick: () => void;
}

const ListItem: React.FC<Props> = ({
  title,
  description,
  languages,
  onViewClick,
}) => {
  return (
    <div className="flex items-center justify-between border border-[#35281e] p-4 my-4 rounded-sm">
      <div>
        <h3 className="text-md font-semibold">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="flex mt-2">
          {languages.map((language, index) => (
            <div key={index} className="flex items-center mr-2">
              <div
                className="w-2 h-2 rounded-full mr-2"
                style={{ backgroundColor: language.color }}
              ></div>
              <span className="text-sm text-gray-600">{language.name}</span>
            </div>
          ))}
        </div>
      </div>
      <button
        className="bg-[#f5f5f0] border border-[#35281e] text-[#35281e] px-4 py-2 rounded-sm text-sm flex space-x-2"
        onClick={onViewClick}
      >
        <span>View</span>
      </button>
    </div>
  );
};

export default ListItem;
