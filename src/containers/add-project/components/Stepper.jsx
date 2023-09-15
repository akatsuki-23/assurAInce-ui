const Stepper = ({ selectedIndex = 0 }) => {
  const STEPS = ['Details', 'Add Employee', 'AI Tools'];

  return (
    <div>
      <div className="flex gap-[8px] items-center">
        {STEPS.map((item, index) => {
          const isSelected = selectedIndex === index;
          return (
            <>
              <div
                key={item}
                className={`font-medium text-[15px] border border-[#985EFF] flex items-center justify-center w-[24px] h-[24px] rounded-[4px] ${
                  isSelected
                    ? 'bg-[#985EFF] text-white'
                    : 'bg-none text-[#985EFF] opacity-[0.5]'
                }`}
              >
                {index + 1}
              </div>
              <div
                className={`font-medium text-[15px] ${
                  !isSelected && 'opacity-[0.5]'
                }`}
              >
                {item}
              </div>
              {index < 2 && (
                <hr
                  className={`border-dashed px-[8px] border border-black w-[32px] ${
                    !isSelected && 'opacity-[0.5]'
                  }`}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Stepper;
