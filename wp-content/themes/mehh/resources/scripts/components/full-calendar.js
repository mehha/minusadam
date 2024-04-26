import dayGridPlugin from '@fullcalendar/daygrid'
import * as FullCalendar from "@fullcalendar/core";
import etLocale from '@fullcalendar/core/locales/et';
import {windowWidth} from "../utilities/window-size";

export function handleFullCalendar() {
  const calendarElFull = document.getElementById('full-calendar')

  if (!calendarElFull) {
    return
  }

  const handleData = (data) => {
    const modifiedData = []

    data.map((single) => {
      modifiedData.push({
        start: single.begin,
        end: single.end,
      })
    })

    return modifiedData
  }

  try {
    // eslint-disable-next-line no-undef
    fetch(baseUrl+'/wp-json/wp/v2/bookings').then(res => {
      return res.json();
    }).then(data => {
      // console.log('data', data)
      handleData(data)
      initCalendar(handleData(data))
    });

  } catch (e) {
    console.log('error', e)
  }

  const initCalendar = (events) => {
    let calendar = new FullCalendar.Calendar(calendarElFull, {
      plugins: [dayGridPlugin],
      initialView: 'dayGridMonth',
      events: events,
      locale: etLocale,
      displayEventTime: false,
      eventDisplay: 'block',
      contentHeight: 420,
      headerToolbar: {
        left: 'prev,next today',
        center: '',
        right: 'title',
      },
      eventContent: function () {
        let titleHtml = '<div class="fc-event-title fc-sticky">Broneeritud</div>';
        return {html: titleHtml}
      },
    });

    calendar.render();

  }
}
