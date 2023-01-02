import Image from "next/image";

export default function Avatar () {
    return (
        <>
            <img
                src={`https://i.seadn.io/gae/hzLKlFmgBeHJTZWsWGqGxbAWdNBVvtI_Ya4alWRJSchud-LgCZ4HMQVmXxfFmy-vfUhdg9z9LCwIpXaY-jzesnL-qZ2hl1DXgxsXLq8?auto=format&w=750`}
                width={170}
                height={170}
                className={`rounded-lg`}
            />
        </>
    )
}