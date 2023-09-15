import MainCard from "../../../../components/main-card/MainCard";
import MainCardHeader from "../../../../components/main-card/MainCardHeader";

const data = [
  { label: "Adobe Firefly", hours: "35:34:56 hr", percentage: 75 },
  { label: "Chat GPT", hours: "30:34:56 hr", percentage: 50 },
  { label: "Lensa", hours: "21:34:56 hr", percentage: 20 },
];

const AiToolUsage = ({ className }) => {
  return (
    <MainCard className={className}>
      <MainCardHeader title="AI Tool Usage">
        <div className="ml-auto">
          Last 7 days
        </div>
      </MainCardHeader>
      <div className="p-6">
        {data.map((item, i) => (
          <div key={i} className="py-3 first:pt-0 last:pb-0">
            <div className="flex items-center justify-between">
              <div>{item.label}</div>
              <div>{item.hours}</div>
            </div>
            <div className="h-2 rounded-full bg-gray-200 mt-2">
              <div
                className="bg-blue h-full rounded-full duration-500"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </MainCard>
  );
};

export default AiToolUsage;
