import {FunctionComponent, useContext, useState} from "react"
import {ReactComponent as DoneCircle} from "../../../../assets/icons/done-circle.svg"
//import clearanceCardOneSrc from "../../../../assets/videos/Clearence_Card_00.mp4"
import groupiePassSrc from "../../../../assets/images/SkeletonSteph_Site_FanboyPass.png"
import Button from "../../../../components/Button"
import Grid from "../../../../components/Grid"
import ImageModal from "../../../../components/Modal/ImageModal"
import {Web3Context} from "../../../../context"
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
		fanboyPassTotal,
		onMintFanboyPass
	} = useMembership()

	const {signIn} = useContext(Web3Context)

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
								<span className="karla-bold">Introducing the Seker Factory Clearance Cards.</span>
								These limited-edition NFTs represent our way of opening our factory up to patrons of
								the Seker intergalactic metaverse community. We are calling on you to help crowd
								source the wisdom of curation. We believe a community of art appreciators should be
								the driving force of defining what is authentic digital art. We have written custom
								smart contract code that lets you level up these cards over time as you participate
								in events, add valuable contributions to the community, or simply hang out and enjoy
								the productions. The higher your level, the more representation, merited governance
								rights on some proposals, and rewards you have in your community.
							</p>
						</Grid>
						<Grid row className="membership__items-container">
							<Grid size={6} xs={12} sm={12} lg={12} className="membership__item">
								<Grid className="membership__item-img-container">
									<img src={groupiePassSrc} />
									<p className="membership__subheader-2">
										Limited Skeleton Steph &quot;Fanboy Pass&quot; (Allowlist)
									</p>
									<p className="membership__item-minted">{fanboyPassTotal} minted / 250 total</p>
									<Button
										onClick={async () => {
											await signIn()
											onMintFanboyPass()
										}}
									>
										Mint NFT
									</Button>
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
