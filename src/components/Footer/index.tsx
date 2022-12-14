import {FunctionComponent} from "react"
import {ReactComponent as DiscordIcon} from "../../assets/icons/discord-grayscale.svg"
import {ReactComponent as InstagramIcon} from "../../assets/icons/instagram_standard.svg"
import {ReactComponent as TwitterIcon} from "../../assets/icons/twitter-grayscale.svg"
// import {ReactComponent as YouTubeIcon} from "../../assets/icons/youtube_standard.svg"
import Grid from "../Grid"
import "./index.scss"

const Footer: FunctionComponent<React.PropsWithChildren<unknown>> = () => (
	<footer className="footer">
		<Grid container className="footer__inner-container">
			<section className="footer__left">
				<p>© 2022 Skeleton Steph</p>
			</section>
			<section className="footer__right">
				<a href="https://discord.gg/mHysqPTMJ3" target="_blank" rel="noreferrer">
					<DiscordIcon height="30px" width="26px" />
				</a>
				<a href="https://www.instagram.com/realskeletonsteph/" target="_blank" rel="noreferrer">
					<InstagramIcon height="30px" width="30px" />
				</a>
				<a href="https://twitter.com/realskellysteph" target="_blank" rel="noreferrer">
					<TwitterIcon height="30px" width="37px" />
				</a>
				{/*<a
					href="https://www.youtube.com/channel/UC6LyJJipQM0qe3Jcq8pdHog"
					target="_blank"
					rel="noreferrer"
				>
					<YouTubeIcon height="30px" width="30px" />
				</a>*/}
			</section>
		</Grid>
	</footer>
)

export default Footer
