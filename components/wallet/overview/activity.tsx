import {
    BarChart,
    Bar,
    Cell,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from 'recharts';

export default function LastActivity ({ data }: any) {
    return (
        <ResponsiveContainer width="100%" height="100%">
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3" vertical={false} />
                <XAxis dataKey="date" />
                <YAxis />
                <Legend />
                <Bar dataKey="erc20"  fill="#78EEFF" />
                <Bar dataKey="nft"  fill="#41EB93" />
                <Bar dataKey="defi" fill="#C165ED" />
            </BarChart>
        </ResponsiveContainer>
    )
}