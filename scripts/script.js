    const videos = [
        {
            manifestUri: 'https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd',
            clearKey: {
                'dac605bc197e442c93f4f08595a95100': '975e27ffc1b7949721ee3ccb4b7fd3e5'
            }
        },
        {
            manifestUri: 'https://cdn09jtedge.indihometv.com/joss/133/hitsmovie/index.m3u8',
            clearKey: {}
        },
        {
            manifestUri: 'https://cdn09jtedge.indihometv.com/joss/134/hitsnow/index.m3u8',
            clearKey: {}
        },
        {
            manifestUri: 'https://linearjitp02-playback.astro.com.my/dash-wv/linear/9983/default.mpd',
            clearKey: {
                'aa48b28bd723f91214887df6ed9fad10': 'b5a3a800848120c843ae0fa68c09c261'
            }
        },
        {
            manifestUri: 'https://jungotvstream-chanall.akamaized.net/jungotv/hallypop/stream.m3u8',
            clearKey: {}
        },
    ];

    async function loadVideo(index) {
        const player = window.player;
        const videoElement = document.getElementById('video');
        const { manifestUri, clearKey } = videos[index];

        console.log('Attempting to load video:', manifestUri);

        player.configure({
            drm: {
                clearKeys: clearKey
            }
        });

        try {
            player.unload();
            videoElement.pause();
            videoElement.currentTime = 0;

            await player.load(manifestUri);
            console.log('Video loaded successfully:', manifestUri);
        } catch (error) {
            console.error('Error loading video:', error);
        }
    }

    function initApp() {
        shaka.polyfill.installAll();

        if (shaka.Player.isBrowserSupported()) {
            init();
        } else {
            console.error('Browser not supported!');
        }
    }

    async function init() {
        const videoElement = document.getElementById('video');

        const ui = videoElement['ui'];
        const controls = ui.getControls();
        const player = controls.getPlayer();

        const config = {
            'abr': {
                enabled: true,
                defaultBandwidthEstimate: 3000000,
            },
            'streaming': {
                rebufferingGoal: 5,
                bufferBehind: 10,
                bufferingGoal: 15,
                lowLatencyMode: true,
                stallSkip: true,
                retryParameters: {
                    maxAttempts: 5,
                    baseDelay: 500,
                    backoffFactor: 2,
                    fuzzFactor: 0.5,
                },
            },
            'manifest': {
                retryParameters: shaka.net.NetworkingEngine.defaultRetryParameters(),
            },
            'drm': {
                clearKeys: {}
            }
        };

        player.configure(config);

        ui.configure({
            'seekBarColors': {
                base: 'rgba(255, 255, 255, 0.3)',
                buffered: 'rgba(255, 255, 255, 0.54)',
                played: 'rgb(255, 255, 255)'
            }
        });

        window.player = player;
        window.ui = ui;
        window.controls = controls;

        player.addEventListener("error", onPlayerErrorEvent);
        controls.addEventListener("error", onUIErrorEvent);
    }

    function onPlayerErrorEvent(errorEvent) {
        console.error('Player error:', errorEvent.detail);
    }

    function onUIErrorEvent(errorEvent) {
        console.error('UI error:', errorEvent.detail);
    }

    function initFailed() {
        console.error('Shaka UI failed to load');
    }

    document.addEventListener('shaka-ui-loaded', init);
    document.addEventListener('shaka-ui-load-failed', initFailed);
    document.addEventListener('DOMContentLoaded', initApp);

               function ctrlShiftKey(e, keyCode) {
              return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
            }

            document.onkeydown = (e) => {
            if (
              event.keyCode === 123 ||
              ctrlShiftKey(e, 'I') ||
              ctrlShiftKey(e, 'J') ||
              ctrlShiftKey(e, 'C') ||
              (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
            )
              return false;
            };
        });
