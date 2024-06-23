var i = "";
screen.width && ((width = screen.width ? screen.width : ""), (height = screen.height ? screen.height : ""), (i += width + " x " + height));
var n,
    t,
    a,
    o = navigator.appVersion,
    r = navigator.userAgent,
    d = navigator.appName,
    s = "" + parseFloat(navigator.appVersion),
    c = parseInt(navigator.appVersion, 10);
-1 != (t = r.indexOf("Opera")) && ((d = "Opera"), (s = r.substring(t + 6)), -1 != (t = r.indexOf("Version")) && (s = r.substring(t + 8))),
    -1 != (t = r.indexOf("OPR"))
        ? ((d = "Opera"), (s = r.substring(t + 4)))
        : -1 != (t = r.indexOf("Edge"))
        ? ((d = "Microsoft Legacy Edge"), (s = r.substring(t + 5)))
        : -1 != (t = r.indexOf("Edg"))
        ? ((d = "Microsoft Edge"), (s = r.substring(t + 4)))
        : -1 != (t = r.indexOf("MSIE"))
        ? ((d = "Microsoft Internet Explorer"), (s = r.substring(t + 5)))
        : -1 != (t = r.indexOf("Chrome"))
        ? ((d = "Chrome"), (s = r.substring(t + 7)))
        : -1 != (t = r.indexOf("Safari"))
        ? ((d = "Safari"), (s = r.substring(t + 7)), -1 != (t = r.indexOf("Version")) && (s = r.substring(t + 8)))
        : -1 != (t = r.indexOf("Firefox"))
        ? ((d = "Firefox"), (s = r.substring(t + 8)))
        : -1 != r.indexOf("Trident/")
        ? ((d = "Microsoft Internet Explorer"), (s = r.substring(r.indexOf("rv:") + 3)))
        : (n = r.lastIndexOf(" ") + 1) < (t = r.lastIndexOf("/")) && ((d = r.substring(n, t)), (s = r.substring(t + 1)), d.toLowerCase() == d.toUpperCase() && (d = navigator.appName)),
    -1 != (a = s.indexOf(";")) && (s = s.substring(0, a)),
    -1 != (a = s.indexOf(" ")) && (s = s.substring(0, a)),
    -1 != (a = s.indexOf(")")) && (s = s.substring(0, a)),
    (c = parseInt("" + s, 10)),
    isNaN(c) && ((s = "" + parseFloat(navigator.appVersion)), (c = parseInt(navigator.appVersion, 10)));
var v = /Mobile|mini|Fennec|Android|iP(ad|od|hone)/.test(o),
    l = !!navigator.cookieEnabled;
void 0 !== navigator.cookieEnabled || l || ((document.cookie = "testcookie"), (l = -1 != document.cookie.indexOf("testcookie")));
var g = "-",
    w = [
        { s: "Windows 10", r: /(Windows 10.0|Windows NT 10.0)/ },
        { s: "Windows 8.1", r: /(Windows 8.1|Windows NT 6.3)/ },
        { s: "Windows 8", r: /(Windows 8|Windows NT 6.2)/ },
        { s: "Windows 7", r: /(Windows 7|Windows NT 6.1)/ },
        { s: "Windows Vista", r: /Windows NT 6.0/ },
        { s: "Windows Server 2003", r: /Windows NT 5.2/ },
        { s: "Windows XP", r: /(Windows NT 5.1|Windows XP)/ },
        { s: "Windows 2000", r: /(Windows NT 5.0|Windows 2000)/ },
        { s: "Windows ME", r: /(Win 9x 4.90|Windows ME)/ },
        { s: "Windows 98", r: /(Windows 98|Win98)/ },
        { s: "Windows 95", r: /(Windows 95|Win95|Windows_95)/ },
        { s: "Windows NT 4.0", r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/ },
        { s: "Windows CE", r: /Windows CE/ },
        { s: "Windows 3.11", r: /Win16/ },
        { s: "Android", r: /Android/ },
        { s: "Open BSD", r: /OpenBSD/ },
        { s: "Sun OS", r: /SunOS/ },
        { s: "Chrome OS", r: /CrOS/ },
        { s: "Linux", r: /(Linux|X11(?!.*CrOS))/ },
        { s: "iOS", r: /(iPhone|iPad|iPod)/ },
        { s: "Mac OS X", r: /Mac OS X/ },
        { s: "Mac OS", r: /(Mac OS|MacPPC|MacIntel|Mac_PowerPC|Macintosh)/ },
        { s: "QNX", r: /QNX/ },
        { s: "UNIX", r: /UNIX/ },
        { s: "BeOS", r: /BeOS/ },
        { s: "OS/2", r: /OS\/2/ },
        { s: "Search Bot", r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/ },
    ];
for (var u in w) {
    var W = w[u];
    if (W.r.test(r)) {
        g = W.s;
        break;
    }
}
var O = "-";
switch ((/Windows/.test(g) && ((O = /Windows (.*)/.exec(g)[1]), (g = "Windows")), g)) {
    case "Mac OS":
    case "Mac OS X":
    case "Android":
        O = /(?:Android|Mac OS|Mac OS X|MacPPC|MacIntel|Mac_PowerPC|Macintosh) ([\.\_\d]+)/.exec(r)[1];
        break;
    case "iOS":
        O = (O = /OS (\d+)_(\d+)_?(\d+)?/.exec(o))[1] + "." + O[2] + "." + (0 | O[3]);
}
var p = "no check";
if ("undefined" != typeof swfobject) {
    var x = swfobject.getFlashPlayerVersion();
    p = x.major > 0 ? x.major + "." + x.minor + " r" + x.release : "-";
}
let f = {
    screen: i,
    browser: d,
    browserVersion: s,
    browserMajorVersion: c,
    mobile: v,
    os: g,
    osVersion: O,
    cookies: l,
    flashVersion: p,
    latitude: void 0,
    longitude: void 0,
    device_eventData: {
        gamma: void 0,
        beta: void 0,
        alpha: void 0,
        acceleration_x: void 0,
        acceleration_y: void 0,
        acceleration_z: void 0,
        accelerationIncludingGravity_x: void 0,
        accelerationIncludingGravity_y: void 0,
        accelerationIncludingGravity_z: void 0,
        accelerationIncludingGravity_z: void 0,
        rotationRate_alpha: void 0,
        rotationRate_beta: void 0,
        rotationRate_gamma: void 0,
        devicelight: void 0,
        lightlevel: void 0,
        deviceproximity: void 0,
        userproximity: void 0,
    },
    batteryLevel: void 0,
};
navigator.geolocation &&
    navigator.geolocation.getCurrentPosition(function (e) {
        (f.latitude = e.coords.latitude), (f.longitude = e.coords.longitude);
    }),
    Window &&
        null != window.DeviceOrientationEvent &&
        window.addEventListener(
            "deviceorientation",
            function (e) {
                (f.device_eventData.gamma = e.gamma), (f.device_eventData.beta = e.beta), (f.device_eventData.alpha = e.alpha);
            },
            !1
        ),
    window &&
        null != window.DeviceMotionEvent &&
        window.addEventListener(
            "devicemotion",
            function (e) {
                (f.device_eventData.acceleration_x = e.acceleration.x),
                    (f.device_eventData.acceleration_y = e.acceleration.y),
                    (f.device_eventData.acceleration_z = e.acceleration.z),
                    (f.device_eventData.accelerationIncludingGravity_x = e.accelerationIncludingGravity.x),
                    (f.device_eventData.accelerationIncludingGravity_y = e.accelerationIncludingGravity.y),
                    (f.device_eventData.accelerationIncludingGravity_z = e.accelerationIncludingGravity.z),
                    (f.device_eventData.rotationRate_alpha = e.rotationRate.alpha),
                    (f.device_eventData.rotationRate_beta = e.rotationRate.beta),
                    (f.device_eventData.rotationRate_gamma = e.rotationRate.gamma);
            },
            !1
        ),
    window &&
        "ondevicelight" in window &&
        window.addEventListener("devicelight", function (e) {
            f.device_eventData.devicelight = e.value + " lux";
        }),
    window &&
        "onlightlevel" in window &&
        window.addEventListener("lightlevel", function (e) {
            f.device_eventData.lightlevel = e.value;
        }),
    window &&
        "ondeviceproximity" in window &&
        window.addEventListener("deviceproximity", function (e) {
            f.device_eventData.deviceproximity = e.value + " centimeters";
        }),
    window &&
        "ondeviceproximity" in window &&
        window.addEventListener("userproximity", function (e) {
            1 == e.near ? (f.device_eventData.userproximity = "Near") : (f.device_eventData.userproximity = "far");
        });
var m = navigator.battery || navigator.webkitBattery || navigator.mozBattery;
function _(e) {
    f.batteryLevel = parseInt(100 * e.level).toString();
}
navigator.getBattery ? navigator.getBattery().then(_) : m && _(m)

console.log("INFORMATION: ",f)

let informationField = document.querySelector('#information')
informationField.textContent = JSON.stringify(f)
