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
            { name: "JUNGO PINOY TV", src: "https://jungotvstream-chanall.akamaized.net/jungotv/jungopinoytv/stream.m3u8", drm: "" },
            { name: "HALLYPOP", src: "https://jungotvstream-chanall.akamaized.net/jungotv/hallypop/stream.m3u8", drm: "" },
            { name: "A2Z", src: "https://qp-pldt-live-grp-02-prod.akamaized.net/out/u/cg_a2z.mpd", drm: "clearkey", key: "f703e4c8ec9041eeb5028ab4248fa094:c22f2162e176eee6273a5d0b68d19530" },
            { name: "BILYONARYO", src: "https://qp-pldt-live-grp-05-prod.akamaized.net/out/u/bilyonaryoch.mpd", drm: "clearkey", key: "227ffaf09bec4a889e0e0988704d52a2:b2d0dce5c486891997c1c92ddaca2cd2" },
            { name: "KIX", src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/kix_hd1.mpd", drm: "clearkey", key: "a8d5712967cd495ca80fdc425bc61d6b:f248c29525ed4c40cc39baeee9634735" },
            { name: "THRILL", src: "https://qp-pldt-live-grp-06-prod.akamaized.net/out/u/cg_thrill_sd.mpd", drm: "clearkey", key: "928114ffb2394d14b5585258f70ed183:a82edc340bc73447bac16cdfed0a4c62" },
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
