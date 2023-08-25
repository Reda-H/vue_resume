// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { addDoc, collection, getFirestore } from "firebase/firestore";

function initFS() {

    const firebaseConfig = {
        apiKey: import.meta.env.VITE_APIKEY,
        authDomain: import.meta.env.VITE_AUTHDOMAIN,
        projectId: import.meta.env.VITE_PROJECTID,
        storageBucket: import.meta.env.VITE_STORAGEBUCKET,
        messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
        appId: import.meta.env.VITE_APPID
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    return { app, db };
}

async function gatherBrowserDataAndSendToDash() {
    let {db} = initFS();
    try {
        await addDoc(collection(db, "dash/visits/resume"), {
            timeOpened: new Date(),
            timestamp: new Date(),
            timezone: (new Date()).getTimezoneOffset() / 60,

            source: window.location.href,
            pageon: window.location.pathname,
            referrer: document.referrer,
            previousSites: history.length,

            browserName: navigator.appName,
            browserEngine: navigator.product,
            browserVersion1a: navigator.appVersion,
            browserVersion1b: navigator.userAgent,
            browserLanguage: navigator.language,
            browserOnline: navigator.onLine,
            browserPlatform: navigator.platform,
            javaEnabled: navigator.javaEnabled(),
            dataCookiesEnabled: navigator.cookieEnabled,
            dataCookies1: document.cookie,
            dataCookies2: decodeURIComponent(document.cookie.split(";")),
            dataStorage: { ...localStorage },

            sizeScreenW: screen.width,
            sizeScreenH: screen.height,
            sizeInW: innerWidth,
            sizeInH: innerHeight,
            sizeAvailW: screen.availWidth,
            sizeAvailH: screen.availHeight,
            scrColorDepth: screen.colorDepth,
            scrPixelDepth: screen.pixelDepth,
        });
    } catch (e) {
        console.error("Error sending document: ", e);
    }
}

export default {
    install: (app, options) => {
        app.config.globalProperties.$sendBrowserMetadata = gatherBrowserDataAndSendToDash;
    }
};