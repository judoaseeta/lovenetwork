export interface LabelledInputProps {
    value: string
    onChange: React.ChangeEventHandler<HTMLInputElement>
    label: string
    type: string
}
export default function LabelledInput({ label, type, value, onChange }: LabelledInputProps) {
    return (
        <label htmlFor={label} className="flex justify-between items-center w-full p-1">
            <h3 className="select-none text-white ">{label} : </h3>
            <div className="flex justify-end">
                <input id={label} value={value} onChange={onChange} type={type} className="rounded-xl p-2" />
            </div>
        </label>
    )
}
