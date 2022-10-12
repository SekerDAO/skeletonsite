// import {FunctionComponent, useContext, useState} from "react"
import {FunctionComponent, useState} from "react"
import {ReactComponent as DoneCircle} from "../../../../assets/icons/done-circle.svg"
import Opensea from "../../../../assets/icons/opensea_logo.png"
//import clearanceCardOneSrc from "../../../../assets/videos/Clearence_Card_00.mp4"
import groupiePassSrc from "../../../../assets/images/SkeletonSteph_Site_FanboyPass.png"
import Button from "../../../../components/Button"
import Grid from "../../../../components/Grid"
import ImageModal from "../../../../components/Modal/ImageModal"
// import {Web3Context} from "../../../../context"
import BuyClearanceCard from "../BuyClearanceCard"
import useMembership from "./hooks"
import "./index.scss"

const Membership: FunctionComponent = () => {
	const [fullVideoSrc, setFullVideoSrc] = useState<string | undefined>(undefined)

	const {
		buyingClearanceCardType,
		setBuyingClearanceCardType,
		onPurchaseClearanceCard,
		onPurchaseTopClearanceCard,
		clearanceCardMintValue,
		setClearanceCardMintValue,
		processingClearanceCardPurchase,
		// processingFanboyPassMint,
		// clearanceCardTotal,
		fanboyPassTotal
		// onMintFanboyPass
	} = useMembership()

	// const {signIn} = useContext(Web3Context)

	return (
		<>
			<BuyClearanceCard
				buyingClearanceCardType={buyingClearanceCardType}
				// mintingFanboyPassType={mintingFanboyPassType}
				setBuyingClearanceCardType={setBuyingClearanceCardType}
				// setMintingFanboyPassType={setMintingFanboyPassType}
				clearanceCardMintValue={clearanceCardMintValue}
				setClearanceCardMintValue={setClearanceCardMintValue}
				onPurchaseClearanceCard={onPurchaseClearanceCard}
				onPurchaseTopClearanceCard={onPurchaseTopClearanceCard}
				// onMintFanboyPass={onMintFanboyPass}
				// processingFanboyPassMint={processingFanboyPassMint}
				processing={processingClearanceCardPurchase}
			/>
			<ImageModal
				src={fullVideoSrc}
				open={!!fullVideoSrc}
				onClose={() => setFullVideoSrc(undefined)}
				video
			/>
			<Grid Component="section" row className="membership">
				<Grid container>
					<Grid size={2} xs={12} sm={12} lg={12} />
					<Grid size={8} xs={12} sm={12} lg={12} className="membership__content">
						<Grid size={8} xs={12} sm={12} lg={12} className="membership__subheader">
							<h3>
								Introducing the Official
								<br />
								Skeleton Steph Genesis Mini-Series!
								<br />
							</h3>
						</Grid>
						<Grid size={12} xs={12} sm={12} lg={12} className="membership__description">
							<p className="membership__description-content">
								Sprouting from the art of renowned street artist, Sticky Shaw as well as
								collaborations with creative heavy hitters, Izzy Arias, Greg Cipes, Tracey Power,
								and Pete Wentz, Skeleton Steph is taking its first steps into web3! With the drop of
								our official Genesis Mini-Series, the team behind Skeleton Steph is employing the
								power of Storytelling NFTs to onboard you, our amazing community, to help us
								determine where Steph and the Krawlers go next! At the cross-section of art,
								cartoon, music, and fashion, the possibilities are endless, and we want you with us
								every step of the way to help build the raddest adventure for all!
								<br />
								<br />
								Can&apos;t wait to jump in? Grab a free limited-edition &quot;Fanboy Pass&quot; NFT
								to lock in an allowlist spot for the Genesis Mini-Series minting on October 15th,
								starting at midnight (PST). The Genesis Mini-Series will be available for public
								minting on October 16th.
							</p>
						</Grid>
						<Grid row className="membership__items-container">
							<Grid size={6} xs={12} sm={12} lg={12} className="membership__item">
								<Grid className="membership__item-img-container">
									<img src={groupiePassSrc} className="membership__item-img-container-steph_img" />
									<p className="membership__subheader-2">
										Limited Skeleton Steph &quot;Fanboy Pass&quot; (Allowlist)
									</p>
									<p className="membership__item-minted">{fanboyPassTotal} minted / 251 total</p>
									<Button
										onClick={async () => {
											{
												/* await signIn() */
											}
											{
												/* onMintFanboyPass() */
											}
										}}
									>
										Free Mint (Fully Claimed)
									</Button>
									<img src={Opensea} className="membership__item-img-container-opensea" />
									<p>
										<a href="https://opensea.io/collection/skeleton-steph-fanboy-pass">
											Purchase a &quot;Fanboy Pass&quot; Allowlist NFT on OpenSea
										</a>
									</p>
								</Grid>
							</Grid>
							<Grid size={6} xs={12} sm={12} lg={12} className="membership__item">
								<Grid className="membership__item-img-container">
									<h3 className="membership__subheader-2">Skip the line - mint free today!</h3>
									<ul>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Lock in your minting spot for the exclusive Skeleton Steph Genesis
												Mini-Series, which can be redeemed on Oct. 15th.
												<br />
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Genesis series includes variations of 7 Skeleton Steph characters, with
												potential rarity features!
												<br />
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Actual Genesis NFT is revealed on Oct. 29th.
												<br />
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Each Minted Genesis NFT comes with airdrops to holders for future Skeleton
												Steph drops.
												<br />
											</p>
										</li>
										<li>
											<div className="membership__item-icon-container">
												<DoneCircle width="20px" height="20px" />
											</div>
											<p>
												Each minted Genesis NFT grants 1 admission to the exclusive Skeleton Steph x
												Seker Factory&apos;s Halloween party on Oct. 29th as well as a special
												screening / creators&apos; panel event at Seker Factory (date T.B.D.).
												<br />
											</p>
										</li>
									</ul>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid size={2} xs={12} sm={12} lg={12} />
				</Grid>
			</Grid>
		</>
	)
}

export default Membership
