import { addHours } from "date-fns"
import { useUiStore, useCalendarStore } from "../../hooks"

export const FabAddNew = () => {
    const { openDateModal } = useUiStore()
    const { setActiveEvent } = useCalendarStore()

    const handleClickNew = () => {
        setActiveEvent({
            title: '',
            notes: '',
            user: {
                name: 'Giovanny'
            },
            start: new Date(),
            end: addHours(new Date(), 2),
        })
        openDateModal()
    }

    return (
        <button className="btn btn-primary fab"
            onClick={handleClickNew}>
            <i className="fas fa-plus"></i>
        </button>
    )
}
