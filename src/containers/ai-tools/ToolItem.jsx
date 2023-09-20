import { SuccessIcon } from '../../components/icons';

const ToolItem = ({ item, rank, onClick, isSelected = false }) => {
  const eachToolItemData = item;
  return (
    <div
      className={`relative w-[250px] mb-4 overflow-hidden h-[80px] rounded border ${isSelected && 'border border-gray-500'}`}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      <p className="absolute top-[4px] left-[4px] text-gray-400">{rank}</p>
      <div className="flex pl-5 py-[10px] pr-6 items-center">
        <div className="relative w-12 h-12">
          <div className="absolute -right-[5px] -top-[5px]">
            {rank % 2 == 0 && <SuccessIcon />}
          </div>
          <img src={item.iconUrl} className='rounded-[8px]' />
        </div>
        <div className="flex flex-col ml-3">
          <p className="text-base font-bold w-[150px] truncate">
            {eachToolItemData?.name}
          </p>
          <p className="text-xs w-[150px] text-gray-400 truncate">
            {eachToolItemData?.domain}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ToolItem;
