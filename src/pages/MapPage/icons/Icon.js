import L from 'leaflet';

import work from './work.png'
import build from './build.png'
import service from './service.png'
import alert from './alert.png'
import connected from './connected.png'
import reserved from './reserved.png'
import busy from './busy.png'

import workwork from './workwork.png'
import workbuild from './workbuild.png'
import workbusy from './workbusy.png'
import workservice from './workservice.png'
import workreserved from './workreserved.png'
import workalert from './workalert.png'
import workconnected from './workconnected.png'


import buildbuild from './buildbuild.png' 
import buildservice from './buildservice.png'
import buildbusy from './buildbusy.png'
import buildwork from './buildwork.png'
import buildalert from './buildalert.png'
import buildconnected from './buildconnected.png'
import buildreserved from './buildreserved.png'


import serviceservice from './serviceservice.png'
import servicework from './servicework.png'
import servicebuild from './servicebuild.png'
import servicebusy from './servicebusy.png'
import servicealert from './servicealert.png'
import servicereserved from './servicereserved.png'
import serviceconnected from './serviceconnected.png'


import busyservice from './busyservice.png'
import busywork from './busywork.png'
import busybuild from './busybuild.png'
import busybusy from './busybusy.png'
import busyalert from './busyalert.png'
import busyconnected from './busyconnected.png'
import busyreserved from './busyreserved.png'

import alertalert from './alertalert.png'
import alertservice from './alertservice.png'
import alertbuild from './alertbuild.png'
import alertbusy from './alertbusy.png'
import alertwork from './alertwork.png'
import alertreserved from './alertreserved.png'
import alertconnected from './alertconnected.png'


import reservedalert from './reservedalert.png'
import reservedreserved from './reservedreserved.png'
import reservedwork from './reservedwork.png'
import reservedbusy from './reservedbusy.png'
import reservedconnected from './reservedconnected.png'
import reservedbuild from './reservedbuild.png'
import reservedservice from './reservedservice.png'


import connectedalert from './connectedalert.png'
import connectedservice from './connectedservice.png'
import connectedbuild from './connectedbuild.png'
import connectedbusy from './connectedbusy.png'
import connectedwork from './connectedwork.png'
import connectedreserved from './connectedreserved.png'
import connectedconnected from './connectedconnected.png'


const anchor = [24, 48]
const iconsize = (48,48)

const panchor = [0, -29]


const Work = new L.Icon({
    iconUrl: work,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});
const Busy = new L.Icon({
    iconUrl: busy,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});
const Reserved = new L.Icon({
    iconUrl: reserved,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});
const Service = new L.Icon({
    iconUrl: service,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});
const Build = new L.Icon({
    iconUrl: build,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});
const Connected = new L.Icon({
    iconUrl: connected,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});
const Alert = new L.Icon({
    iconUrl: alert,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});




const WorkWork = new L.Icon({
    iconUrl: workwork,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const WorkBuild = new L.Icon({
    iconUrl: workbuild,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const WorkBusy = new L.Icon({
    iconUrl: workbusy,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const WorkService = new L.Icon({
    iconUrl: workservice,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const WorkReserved = new L.Icon({
    iconUrl: workreserved,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const WorkConnected = new L.Icon({
    iconUrl: workconnected,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const WorkAlert = new L.Icon({
    iconUrl: workalert,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});





const BuildBuild = new L.Icon({
    iconUrl: buildbuild,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});


const BuildService = new L.Icon({
    iconUrl: buildservice,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BuildBusy = new L.Icon({
    iconUrl: buildbusy,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BuildWork = new L.Icon({
    iconUrl: buildwork,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BuildAlert = new L.Icon({
    iconUrl: buildalert,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BuildReserved = new L.Icon({
    iconUrl: buildreserved,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BuildConnected = new L.Icon({
    iconUrl: buildconnected,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});





const ServiceService = new L.Icon({
    iconUrl: serviceservice,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ServiceBusy = new L.Icon({
    iconUrl: servicebusy,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ServiceBuild = new L.Icon({
    iconUrl: servicebuild,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ServiceWork = new L.Icon({
    iconUrl: servicework,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ServiceConnected = new L.Icon({
    iconUrl: serviceconnected,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ServiceReserved = new L.Icon({
    iconUrl: servicereserved,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ServiceAlert = new L.Icon({
    iconUrl: servicealert,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});





const BusyService = new L.Icon({
    iconUrl: busyservice,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BusyWork = new L.Icon({
    iconUrl: busywork,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BusyBusy = new L.Icon({
    iconUrl: busybusy,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BusyBuild = new L.Icon({
    iconUrl: busybuild,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BusyAlert = new L.Icon({
    iconUrl: busyalert,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BusyConnected = new L.Icon({
    iconUrl: busyconnected,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const BusyReserved = new L.Icon({
    iconUrl: busyreserved,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});




const AlertService = new L.Icon({
    iconUrl: alertservice,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const AlertWork = new L.Icon({
    iconUrl: alertwork,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const AlertBusy = new L.Icon({
    iconUrl: alertbusy,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const AlertBuild = new L.Icon({
    iconUrl: alertbuild,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const AlertAlert = new L.Icon({
    iconUrl: alertalert,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const AlertConnected = new L.Icon({
    iconUrl: alertconnected,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const AlertReserved = new L.Icon({
    iconUrl: alertreserved,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});





const ConnectedService = new L.Icon({
    iconUrl: connectedservice,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ConnectedWork = new L.Icon({
    iconUrl: connectedwork,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ConnectedBusy = new L.Icon({
    iconUrl: connectedbusy,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ConnectedBuild = new L.Icon({
    iconUrl: connectedbuild,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ConnectedAlert = new L.Icon({
    iconUrl: connectedalert,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ConnectedConnected = new L.Icon({
    iconUrl: connectedconnected,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ConnectedReserved = new L.Icon({
    iconUrl: connectedreserved,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});



const ReservedService = new L.Icon({
    iconUrl: reservedservice,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ReservedWork = new L.Icon({
    iconUrl: reservedwork,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ReservedBusy = new L.Icon({
    iconUrl: reservedbusy,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ReservedBuild = new L.Icon({
    iconUrl: reservedbuild,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ReservedAlert = new L.Icon({
    iconUrl: reservedalert,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ReservedConnected = new L.Icon({
    iconUrl: reservedconnected,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});

const ReservedReserved = new L.Icon({
    iconUrl: reservedreserved,
    iconAnchor: anchor,
    popupAnchor: panchor,
    iconSize: new L.Point(iconsize),
});





export {
    Work,
    Busy,
    Reserved,
    Service,
    Build,
    Connected,
    Alert,

    WorkWork,
    WorkBuild,
    WorkBusy,
    WorkReserved,
    WorkConnected,
    WorkAlert,
    WorkService,

    BuildBuild,
    BuildService,
    BuildBusy,
    BuildWork,
    BuildAlert,
    BuildReserved,
    BuildConnected,

    ServiceService,
    ServiceBusy,
    ServiceBuild,
    ServiceWork,
    ServiceConnected,
    ServiceReserved,
    ServiceAlert,

    BusyService,
    BusyWork,
    BusyBusy,
    BusyBuild,
    BusyAlert,
    BusyConnected,
    BusyReserved,

    AlertService,
    AlertWork,
    AlertBusy,
    AlertBuild,
    AlertAlert,
    AlertConnected,
    AlertReserved,

    ConnectedService,
    ConnectedWork,
    ConnectedBusy,
    ConnectedBuild,
    ConnectedAlert,
    ConnectedConnected,
    ConnectedReserved,

    ReservedService,
    ReservedWork,
    ReservedBusy,
    ReservedBuild,
    ReservedAlert,
    ReservedConnected,
    ReservedReserved,
    
    }