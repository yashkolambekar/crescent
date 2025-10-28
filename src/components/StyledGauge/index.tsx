
import { Gauge, gaugeClasses } from '@mui/x-charts/Gauge';

const StyledGauge = ({
    value,
    valueMax,
    label
}: {
    value: number;
    valueMax: number;
    label: string;
}) => {


    return (
        <div className="p-[1em] flex flex-col items-center justify-center">
            <Gauge
                value={value}
                startAngle={-110}
                endAngle={110}
                cornerRadius={"100%"}
                valueMax={valueMax}
                sx={{
                    // Center text styling
                    '& .MuiGauge-valueText': {
                        fontSize: 24,
                        fontWeight: 600,
                        fill: '#333',
                        transform: 'translate(0px, 0px)',
                    },
                    // Arc styling with rounded corners
                    [`& .${gaugeClasses.valueArc}`]: {
                        fill: '#0017f6', // Keep your green or use #6dd400 for softer look
                        borderRadius: '10px', // Rounded arc ends
                        strokeWidth: 10, // Slightly thicker for visual weight
                    },
                    // Background arc (optional: make it subtle)
                    [`& .${gaugeClasses.referenceArc}`]: {
                        fill: '#e5e7eb', // Light gray background arc
                    },
                }}
                text={({ value, valueMax }) => `${value} / ${valueMax}`}
                width={200}
                height={150}
            />{
                label ? (
                    <p className="mt-[-1em] text-xs text-gray-500 font-medium">{label}</p>
                ) : null
            }
        </div>
    )
}

export default StyledGauge;