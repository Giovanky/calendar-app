import { useState } from "react";
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Navbar, CalendarEvent, CalendarModal } from '../'
import { addHours } from 'date-fns'
import { localizer, getMessagesES } from '../../helpers/'

const events = [{
    title: 'Cumpleaños',
    notes: 'Comprar pastel',
    user: {
        name: 'Giovanny'
    },
    start: new Date(),
    end: addHours(new Date(), 2),
}]

export const CalendarPage = () => {
    const [lastView, setlastView] = useState(localStorage.getItem('lastView') || 'week')

    const eventStyleGetter = (event, start, end, isSelected) => {

        const style = {
            backgroundColor: '#347CF7',
            borderRadius: '0px',
            opacity: 0.8,
            color: 'white'
        } 

        return {
            style
        }
    }

    const onDoubleClick = (event) => {
        console.log({doubleClick: event})
    }

    const onSelect = (event) => {
        console.log({click: event})
    }

    const onViewChanged = (event) => {
        localStorage.setItem('lastView', event)
        setlastView(event)
    }

    return (
        <>
            <Navbar />
            <CalendarModal />

            <Calendar
                culture="es"
                localizer={localizer}
                events={events}
                defaultView={lastView}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 'calc(100vh - 80px)' }}
                messages={getMessagesES()}
                eventPropGetter={eventStyleGetter}
                components={{
                    event: CalendarEvent
                }}
                onDoubleClickEvent={onDoubleClick}
                onSelectEvent={onSelect}
                onView={onViewChanged}
            />
        </>
    )
 }