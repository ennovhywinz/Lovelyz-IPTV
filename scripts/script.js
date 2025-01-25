        const channels = [
            { name: "TEST [IVE - REBEL HEART]", src: "https://media-hosting.imagekit.io//93c790c33d0042a1/IVE%20%EC%95%84%EC%9D%B4%EB%B8%8C%20'REBEL%20HEART'%20MV.mp4?Expires=1832393791&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=oodaZmFZDjmMn~TcEqF~n7hkkCqm1qEuYVbaRUYRe70RSyOUJukmlEQz093KWS~sYJdqpXpFJWzaJLipZ322LBWF~1lMHBAct7u50jtp1qKOnal-usyeK7FuyJxpaWdL~-ozuIz4siz9GJyJ0pivam66MR~C4u-HdcNcsOuALNWvklesenJ1ZSu9f7RqufrzszJCzlCxZ6cim5H2YCnvF3rujMSsmzzfZR0TFI9v5CTZv7yUn8JIEGLhY56Yykey2sNDZJOhCjuKfroslGkBhVuDhMHwA9~ACxX3V6T42irlf93qBIavNbNYi-0lsZ25nU8qVD32SfxxdmR-aekVTg__", drm: "" },
            { name: "TV5", src: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/tv5_hd.mpd", drm: "clearkey", key: "2615129ef2c846a9bbd43a641c7303ef:07c7f996b1734ea288641a68e1cfdc4d" },
            { name: "ONE SPORTS", src: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_onesports_hd.mpd", drm: "clearkey", key: "53c3bf2eba574f639aa21f2d4409ff11:3de28411cf08a64ea935b9578f6d0edd" },
            { name: "RPTV", src: "https://qp-pldt-live-grp-03-prod.akamaized.net/out/u/cnn_rptv_prod_hd.mpd", drm: "clearkey", key: "1917f4caf2364e6d9b1507326a85ead6:a1340a251a5aa63a9b0ea5d9d7f67595" },
            { name: "SARI-SARI", src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_sari_sari_sd.mpd", drm: "clearkey", key: "0a7ab3612f434335aa6e895016d8cd2d:b21654621230ae21714a5cab52daeb9d" },
            { name: "BUKO CHANNEL", src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_buko_sd.mpd", drm: "clearkey", key: "d273c085f2ab4a248e7bfc375229007d:7932354c3a84f7fc1b80efa6bcea0615" },
            { name: "ONE NEWS", src: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/onenews_hd1.mpd", drm: "clearkey", key: "d39eb201ae494a0b98583df4d110e8dd:6797066880d344422abd3f5eda41f45f" },
            { name: "ONE PH", src: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/oneph_sd.mpd", drm: "clearkey", key: "92834ab4a7e1499b90886c5d49220e46:a7108d9a6cfcc1b7939eb111daf09ab3" },
            { name: "MEDIA PILIPINAS", src: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/cg_mptv.mpd", drm: "clearkey", key: "6aab8f40536f4ea98e7c97b8f3aa7d4e:139aa5a55ade471faaddacc4f4de8807" },
            { name: "TRUE FM TV", src: "https://qp-pldt-live-grp-08-prod.akamaized.net/out/u/truefm_tv.mpd", drm: "clearkey", key: "0559c95496d44fadb94105b9176c3579:40d8bb2a46ffd03540e0c6210ece57ce" },
            { name: "PEOPLE'S TELEVISION", src: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_ptv4_sd.mpd", drm: "clearkey", key: "71a130a851b9484bb47141c8966fb4a3:ad1f003b4f0b31b75ea4593844435600" },
            { name: "JUNGO PINOY TV", src: "https://jungotvstream-chanall.akamaized.net/jungotv/jungopinoytv/stream.m3u8", drm: "" },
            { name: "HALLYPOP", src: "https://jungotvstream-chanall.akamaized.net/jungotv/hallypop/stream.m3u8", drm: "" },
            { name: "SCREAMFLIX", src: "https://jungotvstream-chanall.akamaized.net/jungotv/screamflix/stream.m3u8", drm: "" },
            { name: "A2Z", src: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd", drm: "clearkey", key: "f703e4c8ec9041eeb5028ab4248fa094:c22f2162e176eee6273a5d0b68d19530" },
            { name: "KNOWLEDGE CHANNEL", src: "https://qp-pldt-live-grp-13-prod.akamaized.net/out/u/dr_knowledgechannel.mpd", drm: "clearkey", key: "0f856fa0412b11edb8780242ac120002:783374273ef97ad3bc992c1d63e091e7" },
            { name: "BILYONARYO CHANNEL", src: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd", drm: "clearkey", key: "227ffaf09bec4a889e0e0988704d52a2:b2d0dce5c486891997c1c92ddaca2cd2" },
            { name: "TVUP", src: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/tvup_prd.mpd", drm: "clearkey", key: "83e813ccd4ca4837afd611037af02f63:a97c515dbcb5dcbc432bbd09d15afd41" },
            { name: "IBC", src: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/ibc13_sd.mpd", drm: "clearkey", key: "04e292bc99bd4ccba89e778651914254:ff0a62bdf8920ce453fe680330b563a5" },
            { name: "PINOY BOX OFFICE", src: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/pbo_sd.mpd", drm: "clearkey", key: "dcbdaaa6662d4188bdf97f9f0ca5e830:31e752b441bd2972f2b98a4b1bc1c7a1" },
            { name: "VIVACINEMA", src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/viva_sd.mpd", drm: "clearkey", key: "07aa813bf2c147748046edd930f7736e:3bd6688b8b44e96201e753224adfc8fb" },
            { name: "TAGALIZED MOVIE CHANNEL", src: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tagalogmovie.mpd", drm: "clearkey", key: "96701d297d1241e492d41c397631d857:ca2931211c1a261f082a3a2c4fd9f91b" },
            { name: "TVN MOVIES PINOY", src: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_tvnmovie.mpd", drm: "clearkey", key: "2e53f8d8a5e94bca8f9a1e16ce67df33:3471b2464b5c7b033a03bb8307d9fa35" },
            { name: "DREAMWORKS (TAG)", src: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/cg_dreamworktag.mpd", drm: "clearkey", key: "564b3b1c781043c19242c66e348699c5:d3ad27d7fe1f14fb1a2cd5688549fbab" },
            { name: "CNN", src: "https://fl2.moveonjoy.com/CNN_INTERNATIONAL/index.m3u8", drm: "" },
            { name: "BLOOMBERG", src: "https://qp-pldt-live-grp-09-prod.akamaized.net/out/u/bloomberg_sd.mpd", drm: "clearkey", key: "ef7d9dcfb99b406cb79fb9f675cba426:b24094f6ca136af25600e44df5987af4" },
            { name: "RUSSIA TODAY", src: "https://1a-1791.com/live/hr6yv36f/slot-4/mxtm-wdfe_360p/chunklist_DVR.m3u8", drm: "" },
            { name: "SKY NEWS", src: "https://linear417-gb-hls1-prd-ak.cdn.skycdp.com/100e/Content/HLS_001_1080_30/Live/channel(skynews)/index_1080-30.m3u8", drm: "" },
            { name: "AL JAZEERA", src: "https://d1cy85syyhvqz5.cloudfront.net/v1/master/7b67fbda7ab859400a821e9aa0deda20ab7ca3d2/aljazeeraLive/AJE/index.m3u8", drm: "" },
            { name: "CHANNEL NEWS ASIA", src: "https://d2e1asnsl7br7b.cloudfront.net/7782e205e72f43aeb4a48ec97f66ebbe/index.m3u8", drm: "" },
            { name: "EURONEWS", src: "https://cdn09jtedge.indihometv.com/joss/134/euronews/index.m3u8", drm: "" },
            { name: "FRANCE24", src: "https://live.france24.com/hls/live/2037218/F24_EN_HI_HLS/master_5000.m3u8", drm: "" },
            { name: "BBC NEWS", src: "https://d2vnbkvjbims7j.cloudfront.net/containerA/LTN/playlist.m3u8", drm: "" },
            { name: "DEUTSCHE WELLE", src: "https://dwamdstream102.akamaized.net/hls/live/2015525/dwstream102/index.m3u8", drm: "" },
            { name: "WION", src: "https://d7x8z4yuq42qn.cloudfront.net/index_7.m3u8", drm: "" },
            { name: "CNBC ASIA", src: "https://cdn09jtedge.indihometv.com/joss/134/cnbcasia/index.m3u8", drm: "" },
            { name: "GB NEWS", src: "https://cdn-apse1-prod.tsv2.amagi.tv/linear/amg01076-lightningintern-gbnewsnz-samsungnz/playlist.m3u8", drm: "" },
            { name: "KIX", src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd", drm: "clearkey", key: "a8d5712967cd495ca80fdc425bc61d6b:f248c29525ed4c40cc39baeee9634735" },
            { name: "THRILL", src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd", drm: "clearkey", key: "928114ffb2394d14b5585258f70ed183:a82edc340bc73447bac16cdfed0a4c62" },
            { name: "STAR CHANNEL", src: "https://streamer1.nexgen.bz/STAR/index.m3u8", drm: "" },
            { name: "FX", src: "https://streamer1.nexgen.bz/FX/index.m3u8", drm: "" },
            { name: "ROCK ENTERTAINMENT", src: "https://cdn09jtedge.indihometv.com/atm/hlsv3/rock_entertainment/rock_entertainment-avc1_2500000=6-mp4a_96000=2.m3u8", drm: "" },
            { name: "ROCK ACTION", src: "https://cdn09jtedge.indihometv.com/atm/hlsv3/ROCK_ACTION/ROCK_ACTION-avc1_2500000=6-mp4a_96000=2.m3u8", drm: "" },
            { name: "COMEDY CENTRAL", src: "https://ott.zapitv.com/live/eds_c2/comedy_central/dash_live_enc/comedy_central.mpd", drm: "clearkey", key: "f8757de5a495ce5db4893c2eefc11e58:d8309cd9fa8c286f277b4cb9841d7bd2" },
            { name: "PARAMOUNT", src: "https://streamer1.nexgen.bz/PARAMOUNT/index.m3u8", drm: "" },
            { name: "AXN", src: "https://cdn09jtedge.indihometv.com/atm/hlsv3/axn/axn-avc1_2500000=6-mp4a_96000=2.m3u8", drm: "" },
            { name: "HITS", src: "https://qp-pldt-live-grp-04-prod.akamaized.net/out/u/hits_hd1.mpd", drm: "clearkey", key: "dac605bc197e442c93f4f08595a95100:975e27ffc1b7949721ee3ccb4b7fd3e5" },
            { name: "HITS MOVIES", src: "https://cdn09jtedge.indihometv.com/joss/133/hitsmovie/index.m3u8", drm: "" },
            { name: "HITS NOW", src: "https://cdn09jtedge.indihometv.com/joss/134/hitsnow/index.m3u8", drm: "" },
            { name: "CALLE 13", src: "https://ott.zapitv.com/live/eds_c2/calle_13/dash_live_enc/calle_13.mpd", drm: "clearkey", key: "6ae50bb56203f2f3875e3ee78efab1a5:f22429107ea7806f54902bb2926c8872" },
            { name: "SYFY", src: "https://ott.zapitv.com/live/eds_c2/syfy/dash_live_enc/syfy.mpd", drm: "clearkey", key: "95ec1e26e80c38258a30101d06c8cbf7:0d0df5189256c0bf32c0cd0976bac5bd" },
            { name: "WARNER TV", src: "https://qp-pldt-live-grp-11-prod.akamaized.net/out/u/dr_warnertvhd.mpd", drm: "clearkey", key: "4503cf86bca3494ab95a77ed913619a0:afc9c8f627fb3fb255dee8e3b0fe1d71" },
            { name: "LOTUS MACAU", src: "https://qp-pldt-live-grp-07-prod.akamaized.net/out/u/lotusmacau_prd.mpd", drm: "clearkey", key: "60dc692e64ea443a8fb5ac186c865a9b:01bdbe22d59b2a4504b53adc2f606cc1" },
            { name: "MTV LIVE", src: "https://streaming.indihometv.com/atm/hlsv3/MTV_LIVE/playlist.m3u8", drm: "" },
            { name: "MTV HITS", src: "https://ott.zapitv.com/live/eds_c2/mtv_hits/dash_live_enc/mtv_hits.mpd", drm: "clearkey", key: "f2975a79fd099430a195212b04b4dd1e:7f8f21c0b12be72690510d92b893b5ac" }
        ];

        document.addEventListener('DOMContentLoaded', async () => {
            const videoElement = document.getElementById('video');
            const videoContainer = document.getElementById('video-container');
            const channelListElement = document.getElementById('channelList');

            const player = new shaka.Player(videoElement);
            const ui = new shaka.ui.Overlay(player, videoContainer, videoElement);
            const controls = ui.getControls();

            player.addEventListener('error', onErrorEvent);

            function onErrorEvent(event) {
                console.error('Error code', event.detail.code, 'object', event.detail);
            }

            function parseClearKey(keyString) {
                const [keyId, key] = keyString.split(':');
                return { [keyId]: key };
            }

            function isMP4(url) {
                return url.endsWith('.mp4');
            }

            async function loadChannel(channel) {
                try {
                    if (isMP4(channel.src)) {
                        
                        videoElement.src = channel.src;
						videoElement.loop = true;
                        videoElement.play();
                        console.log(`Loaded MP4 channel: ${channel.name}`);
                    } else {
                        if (channel.drm === 'clearkey' && channel.key) {
                            const clearkeyConfig = parseClearKey(channel.key);
                            player.configure({
                                drm: {
                                    clearKeys: clearkeyConfig,
                                },
                            });
                        } else {
                            player.configure({ drm: {} });
                        }
                        await player.load(channel.src);
                        console.log(`Loaded channel: ${channel.name}`);
                    }
                } catch (error) {
                    console.error('Error loading channel:', error);
                }
            }

            function populateChannels() {
                channelListElement.innerHTML = "";
                channels.forEach((channel, index) => {
                    const li = document.createElement('li');
                    li.textContent = channel.name;
                    li.onclick = () => {
                        document.querySelectorAll('.channel-list li').forEach(el => el.classList.remove('active'));
                        li.classList.add('active');
                        loadChannel(channel);
                    };
                    channelListElement.appendChild(li);
                    if (index === 0) li.click();
                });
            }

            function searchChannels() {
                let input = document.getElementById('searchInput').value.toLowerCase();
                document.querySelectorAll('.channel-list li').forEach(channel => {
                    channel.style.display = channel.textContent.toLowerCase().includes(input) ? "block" : "none";
                });
            }

            populateChannels();
            window.searchChannels = searchChannels;
        });

        document.addEventListener('contextmenu', (e) => e.preventDefault());

        function ctrlShiftKey(e, keyCode) {
            return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
        }

        document.onkeydown = (e) => {
            if (
                e.keyCode === 123 ||
                ctrlShiftKey(e, 'I') ||
                ctrlShiftKey(e, 'J') ||
                ctrlShiftKey(e, 'C') ||
                (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
            )
                return false;
        };
