import { Switch } from '@headlessui/react'

const SwitchToggle = ({setEnabled, enabled, taskDone, i, index, idTaskUser, done}) => {

    return (
    <div className="">
        <Switch
        onClick={() => taskDone(i, idTaskUser)}
        checked={enabled && index === i}
        className={`${(enabled && index === i) || done  ? 'bg-green-500' : 'bg-gray-400'}
            relative inline-flex h-[30px] w-[60px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
        <span className="sr-only">Use setting</span>
        <span
            aria-hidden="true"
            className={`${(enabled && index === i) || done ? 'translate-x-6' : 'translate-x-0'}
            pointer-events-none inline-block h-[26px] w-[30px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
        </Switch>
    </div>
    )
}

export default SwitchToggle
