import { Button, Modal } from "react-bootstrap"

function TermAndCondition(props) {
    return (
        <>
            <Modal show={props.show} onHide={props.handleClose} className="dilog-condition">
                <Modal.Header closeButton>
                    <Modal.Title>Terms and Conditions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="term-cond">
                                <h2>1. INTRODUCTION </h2>
                                <p>We are the leading brand of ALDARIN INVESTMENT PVT. LTD., offering Our Platform to You and an opportunity for You to participate in Fantasy Contests spanning across a broad range of stocks, nifty and sensex fantasy guess <strong>(“Services”)</strong></p>
                                <p>Any person using, accessing and/or participating in any fantasy gaming is free-to-play online gaming contests <strong>(“Practice Contest”)</strong> and/or pay-to-play online gaming contests <strong>(“Paid Contest”)</strong> on Our Platform is a user <strong>(“User”)</strong>. All references to “You/Your” relate to the User. All references to “We/Us/Our” relate to “PLAYNIF50” which denotes a collective reference to the PLAYNIF50 mobile application and the PLAYNIF50 website <strong>(hereinafter collectively referred to as “Platform”)</strong>. Practice Contest and Paid Contest are hereinafter collectively referred to as <strong>“Contests”</strong>.</p>

                                <h2>2.	ACCEPTANCE OF OUR TERMS AND CONDITIONS</h2>
                                <p>Your continued usage of Our Platform constitutes Your acceptance of the terms and conditions, including any additional terms that We may make available to You (“Terms") and are contractually binding on You.</p>
                                <p>You accept that in the event of any variance between these Terms and any additional terms relating to the usage of Our Platform or any Contest, the additional terms will prevail.</p>
                                <p>By accepting these Terms, You agree and consent to receive communications from Us and/or Our partners, licensors or associates for any purpose through the following modes:</p>

                                <p> i.	Announcements;</p>
                                <p>ii.	Administrative messages/direct messages ;</p>
                                <p>iii.	Advertisements;</p>
                                <p>iv.	direct notification to your account; and</p>
                                <p> v.	by any other means that We may consider fit for this purpose.
                                    You agree that You shall mark Us as a safe sender on all Your platforms where You receive any such communications from Us (including via email and SMS) to ensure such communications are not transferred to the spam/junk folder. by any other means that We may consider fit for this purpose.
                                    You agree that You shall mark Us as a safe sender on all Your platforms where You receive any such communications from Us (including via email and SMS) to ensure such communications are not transferred to the spam/junk folder.</p>

                                <h2>3.	USER ACCOUNT</h2>

                                <p>i.	You are required to register on Our Platform to create an account to access Our Services (“Account”). At the time of creating Your Account and/or at any time during the utilisation of Our Services, You will be required to provide any and/or all of the following information and/or documents</p>
                                <p>1.	Your full name;</p>
                                <p> 2.	Your mobile number;</p>
                                <p>3. Your full address and state of residence;</p>
                                <p> 4.	Your gender; and</p>
                                <p>5.	Your date of birth.</p>
                                <p>6.	Aadhar number</p>
                                <p> 7.	Any other valid identification</p>
                                <p>8.	Bank Account information</p>
                                <p>9.	UPI ID</p>
                                <p>10.	Permanent Account Number (PAN) We reserve the right to conduct KYC as may be required from time to time in the manner prescribed under such law.</p>

                                <h2>4.	ELIGIBILITY</h2>
                                <p>i.	To participate in any Paid Contest, you must meet the following eligibility criteria:</p>
                                <p>1.	You must be above the age of 18 Years</p>
                                <p>2.	You must be residing in India</p>
                                <p>
                                    3.	You must have a valid Indian mobile number to create an Account.
                                </p>
                                <p>ii.	Please note that Paid Contests are not permitted in the following states <strong>(“Restricted States”)</strong></p>

                                <p>1.	Andhra Pradesh;</p>
                                <p>2.	Assam;</p>
                                <p>3.	Nagaland;</p>
                                <p>4.	Sikkim; and</p>
                                <p>5.	Telangana</p>
                                <p>iii.	You agree that You are not from any of these Restricted States and You shall refrain from making any false disclosures, declarations and/or representations to Us to circumvent the applicable laws and/or regulations of the territory of India (“Applicable Law”) of the Restricted States to participate in any Paid Contests.</p>
                                <h2>5.	CONTEST  RULES AND FORMAT</h2>
                                <h4>1.	CONTEST RULES</h4>
                                <p>You agree and acknowledge that
                                    :</p>
                                <p>1.	To participate in a Contest(s), You are required to create a fantasy guess by selecting day to day real-life NIFTY and SENSEX INDEX.</p>
                                <p>2.	You must make an assumption in your selected stock, NIFTY and SENSEX to participate in the contest within stipulated time limit and/or any other adjusted time (as specified below) of the index (“Contest Deadline”). We may notify any extensions to the contest deadline in advance.</p>
                                <p>3.	Each Contest will require a minimum number of Users to participate in the Contest for it to become operational (“Pre-specified Number of Users”)</p>
                                <p>4.	You may participate in the Paid Contests by paying a pre-designated amount as specified on the relevant Contest page (“Pre-Designated Amount”).</p>
                                <p>5.	For each Contest, We will create a prize pool consisting of contributions from all participating Users (“Prize Money Pool”).</p>
                                <p>6.	For clarity, we have no right or interest in this Prize Money Pool.</p>
                                <p>7.	We reserve a right to deduct a fee from the Pre-Designated Amount in lieu of the Service being provided by Us (“Platform Fees”) and the balance amount shall constitute Your contribution towards the Prize Money Pool.</p>
                                <p>8.	From time to time, we may conduct/organize promotions/offers on the Platform. Your participation in such promotions/ offers shall be in accordance with the terms and conditions applicable to the Promotion.</p>
                                <p>9.	While participating prior to locking any final fantasy guess on any Stocks, Sensex or Nifty, We strongly recommend You conduct Your own independent research of the stocks analysis, market statistics and day to day fluctuations.</p>
                                <p>10.	In participating in Contests, You agree to strictly comply with the Terms, including additional rules published by Us, such as:
                                    (a) “Fantasy Rules” ( available at How to Play - Fantasy stock fantasy guess)
                                    (b) Any other rules and regulations (including without limitation in relation to payments made to participate in any Contest)
                                </p>
                                <h2>Winning</h2>

                                <h4>Winner Declaration</h4>
                                <p>1. Teams are awarded points based on the closest fantasy guess of stocks and Index at the end of the Contest. The User with the closest fantasy guess in the Contest will be declared as the winner (“Winners”). In certain pre-specified Contests having more than one Winner, the distribution of prizes to such Winners will be in increasing order of their fantasy guess’s aggregate score at the closing of the relevant stock market relating to such Contest.</p>
                                <p>2. The Winner(s) will be selected based on the closest fantasy guess of the Index in a particular Contest.</p>
                                <p>3. The number of eligible winners and prizes for the Contest(s) will be announced on the Contest page before the Contest begins.</p>

                                <h4>General Rules for Distribution of Winnings</h4>
                                <p>1. The User accumulating the highest points at the end of a match shall be eligible to win a pre-designated winning disbursed out of the Prize Money Pool as stated on the relevant Contest page.</p>
                                <p>2. We reserve the right to vary or modify the winnings at Our discretion before the Contest Deadline.</p>
                                <p>3. You agree that any winnings in the nature of prizes or rewards awarded by Us shall be governed by the terms and conditions of such specific promotional events.</p>
                                <p>4. We reserve the right to disqualify any Winner and prevent them from withdrawing their winnings or receiving any prize if:</p>
                                <p>a. Any of the document or information submitted by You are incorrect, misleading, false, fabricated, incomplete, or illegible; or</p>
                                <p>b. You made a fantasy guess on behalf of other Users.</p>
                                <p>c. You do not abide by these Terms.</p>
                                <p>d. You have falsely declared your State and entered the contest from prohibited states as per clause IV above.</p>

                                <h4>Verification of Winners</h4>
                                <p>1. We or our third-party service providers working on behalf of us may contact the Winners on the email address provided at the time of Account creation. At this stage, the Winner will be explained the details of the verification process and the documents required for collecting the prize.</p>
                                <p>2. If You have been declared as a Winner on Our Platform but have not received Your Winnings, You may contact Our Help and Support within forty-eight (48) hours of the Winner declaration to help us resolve your concern at the earliest.</p>
                                <p>3. You agree and acknowledge that Our decision with respect to awarding the Winnings as per the Terms will be final and binding on You.</p>



                                <div>
                                    <h2>Payment Terms</h2>
                                    <p>The below terms govern all payment-related transactions made by You, and You agree to abide by them.</p>
                                    <h4>Payment Accounts</h4>
                                    <p>By accessing and using Our Platform, You are provided with the following categories of accounts for processing and reconciling Your payments:</p>
                                    <p>1. <strong>Unutilized Account</strong> - This account holds any amount remitted by You through a designated payment gateway for availing Our Services; and</p>
                                    <p>2. <strong>Winning Account</strong> - This account holds your winnings in any Paid Contests.</p>
                                    <h4>Withdrawals Processing</h4>
                                    <p>1. You will be prompted to provide certain documents for processing your payments and verification purposes at the time of your first withdrawal.</p>
                                    <p>2. The name mentioned on the identification document as provided by You at the time of withdrawal should correspond with the name provided by You at the time of Account creation.</p>
                                    <p>3. We will process your withdrawal after verifying your bank account details and/ or UPI ID (as applicable). Upon verification, we will debit the amount from your Winning Account and transfer it online to your bank account at the earliest.</p>
                                    <p>4. We may charge any processing fee for the online transfer of funds from your Winning Account to Your bank account.</p>
                                    <p>5. We depend on banks and third parties to process transactions on Our Platform. Thus, we may take up to 24 hours to process any payments to Your bank account. You agree not to hold Us responsible or liable for any delay in processing any payments.</p>
                                    <p>6. A transaction, once confirmed, is final, and no cancellation is permissible.</p>
                                    <h4>Taxes Payable</h4>
                                    <p>1. From 01 October 2023, 28% GST is applicable on the amount deposited by You in Your Unutilized Account. You can view the GST paid on each deposit made by You in the Unutilized Account on the ‘My Transaction’ page on the Platform. The GST value listed on the invoice shall be the final GST amount charged to You.</p>
                                    <p>2. All winnings shall be subject to deduction of tax (“TDS”) as per the Income Tax Act 1961. With effect from 1st April 2023, TDS of 30% shall be deducted from Net Winnings (“NW”) on each withdrawal request placed by You.</p>
                                    <p>3. For the purpose of calculating NW:</p>
                                    <p>a. Calculation of NW for the first withdrawal during the Financial Year (FY): NW = A - (B + C)<br />
                                        A = Aggregate amount withdrawn from the Winning Account;<br />
                                        B = Aggregate amount of non-taxable deposit made in the Unutilized Account till the time of withdrawal;<br />
                                        C = Balance amount in the Unutilized Account and the Winning Account at the beginning of the FY (“Opening Balance”);<br />
                                        NW shall be Zero if the sum of B &amp; C is equal to or greater than A.</p>
                                    <p>b. Calculation of NW during the FY in each subsequent withdrawal from the Winning Account<br />
                                        NW = A - (B + C + E)<br />
                                        A = Aggregate amount withdrawn from the Winning Account till the time of such withdrawal, including the amount of such subsequent withdrawal;<br />
                                        B = Aggregate amount of non-taxable deposit made in the Unutilized Account till the time of such subsequent withdrawal;<br />
                                        C = Balance amount in the Unutilized Account and the Winning Account at the beginning of the FY (“Opening Balance”);<br />
                                        E = NW comprised in earlier withdrawal(s) during the FY until this subsequent withdrawal if tax has been deducted on winnings comprised in such withdrawal(s).<br />
                                        NW shall be Zero if the sum of B, C &amp; E is equal to or greater than A.</p>
                                    <p>c. Calculation of NW at the end of the FY:<br />
                                        NW = (A + D) - (B + C + E)<br />
                                        A = Aggregate amount withdrawn from the Winning Account during the FY;<br />
                                        B = Aggregate amount of non-taxable deposit made in the Unutilized Account during the FY;<br />
                                        C = Balance amount in the Unutilized Account and the Winning Account at the beginning of the FY (“Opening Balance”);<br />
                                        D = Balance amount in the Unutilized Account and Winning Account at the end of the FY (“Closing Balance”);<br />
                                        E = NW comprised in earlier withdrawal(s) during the FY if tax has been deducted on winnings comprised in such withdrawal(s).<br />
                                        NW shall be Zero if the sum of B, C &amp; E is equal to or greater than sum of A &amp; D.</p>
                                    <p>4. In the event You do not withdraw any of Your winnings during a financial year and You have Net Winning balance as of 31 March of each year, then TDS of 30% shall be deducted on such Net Winnings balance from Your Winning Account as on 31 March as calculated above.</p>
                                    <p>5. In case of any revisions by the Government of India to the aforementioned rate or the definition of Net Winnings in the future, TDS will be deducted by Us in accordance with the then-current prescribed TDS rate and the revised definition of Net Winnings. Winners will be provided TDS certificates in respect of such tax deductions. The Winners shall be responsible for payment of any other applicable taxes, including but not limited to, income tax, gift tax, etc. in respect of the Net Winnings. We shall not in any manner be responsible for users' individual tax matters.</p>

                                    <h4>iii.	USER FUNDS</h4>
                                    <p>1.	You hereby authorise Us to appoint an independent third-party/ trustee/ escrow agent to act on your behalf in a fiduciary capacity (“Third Party”) with respect to holding any amount belonging to You and undertaking actions, consents, approvals and any other requisite instructions necessary for such amount.</p>
                                    <p>2.	You acknowledge that</p>
                                    <p>a.	We do not hold any right, title and/or interest in the amount deposited by You.</p>
                                    <p>b.	the amount deposited by You will be used only for participation in the Paid Contest.</p>
                                    <p>c.	any amount deposited by You, shall not be forfeited by Us except in case where We receive an instruction from any government agency or competent authority.</p>
                                    <p>3.	You further authorize Us to instruct the Third Party to open a non-interest earning bank account(s) which will be used for the following payouts:</p>
                                    <p>a.	withdrawal of Your winnings;</p>
                                    <p>b.	payment of Platform Fee;</p>
                                    <p>c.	payment of taxes as applicable towards TDS on Net Winnings; and</p>
                                    <p>d.	Government (toward GST payable)</p>
                                    <h2>Your Conduct</h2>

                                    <p>In using and accessing Our Platform, You agree to observe the following code of conduct:</p>

                                    <h4>Account Information</h4>
                                    <p>a. You are permitted to create only one Account on Our Platform. When creating Your Account with Us (or updating Your Account information), You agree that You will provide true, accurate and updated information and documentation. You will not provide any false and/or incorrect information and documentation nor impersonate or attempt to impersonate and/or otherwise assume the identity of another person without due authority. You will not commit any such fraudulent act which amounts to forgery and/or involves the fabrication of documentation.</p>
                                    <p>b. You agree and acknowledge that the address-related details provided by You shall be treated as Your “Address on record” for the purposes of the Goods and Service Tax Act.</p>
                                    <p>c. You agree that You shall promptly update your Account related details on Our Platform in the event of any change in such details and/or write to Our Help and Support in the event of any; a) change in Your Account related details and/or; b) any unauthorised use of Your Account to enable us to take remedial action.</p>

                                    <h4>Maintain Confidentiality</h4>
                                    <p>a. You will maintain the confidentiality of all information relating to Your Account, and You will not share Your One Time Password (“OTP”) with any other person;</p>
                                    <p>b. You will not engage in any fraudulent conduct in logging into another user’s account by asking for their account-related information or taking their OTP.</p>

                                    <h4>Compliance with Applicable Law</h4>
                                    <p>a. You agree to comply with Applicable Laws.</p>
                                    <p>b. You agree that You shall not commit any illegal act that disrupts Our systems.</p>

                                    <h4>Violation of Platform Terms</h4>
                                    <p>a. You shall not engage in any Fair Play Violation.</p>
                                    <p>b. You shall not violate any of the Terms in using and accessing Our Platform and Services;</p>
                                    <p>c. You shall not misuse any Discount and/or any other offers or promotions given by Us.</p>
                                    <p>d. You agree that you shall use the Platform and Our Services solely in Your personal capacity, and You will not engage in malpractices or collude with other Users in deriving any benefit and/or running any business in connection with the use of Our Platform and/or Services.</p>
                                    <p>e. You shall not be engaged in any form of insider trading, i.e., illegally sharing and seeking non-public information, knowledge of participating teams in any given contests/match, strategies, organizing boards, leagues etc., which may give You an unfair competitive advantage. (“Insider Trading”)</p>
                                    <p>f. You shall not tamper, modify, or otherwise deal with our data, content, software, technology and/or Intellectual Property by any means.</p>

                                    <h4>Responsible Play</h4>
                                    <p>We're committed to fostering responsible gaming for all our users. You agree to participate in the Contests responsibly by making informed decisions and playing within Your means. You are encouraged to seek help if needed.</p>

                                    <h2>Our Rights and Obligation</h2>

                                    <h4>Your Content</h4>
                                    <p>We reserve our rights to remove (without notice) any offending/illegal/objectionable/infringing content posted by You and take such necessary action as We may consider appropriate concerning Your Content;</p>

                                    <h4>Our Services</h4>
                                    <p>We may choose to:</p>
                                    <p>1. Change, discontinue or suspend all or any part of Our Service;</p>
                                    <p>2. Suspend or terminate Your Account as directed by an appropriate government agency and/or competent authority.</p>

                                    <h4>Breach of Terms</h4>
                                    <p>In case of breach of these Terms or if We reasonably believe that You have breached these Terms, We may choose to:</p>
                                    <p>1. Restrict, suspend, deactivate or permanently delete Your account with Us (including all related information that You might have provided to Us);</p>
                                    <p>2. Disqualify You from participating in a Contest;</p>
                                    <p>3. Refrain from awarding any prizes to You or forfeit Your winnings;</p>
                                    <p>4. Initiate appropriate civil/criminal proceedings as We may consider appropriate in addition to forfeiture and/or recovery of prize money.</p>
                                    <h2>Intellectual Property Rights</h2>

                                    <h4>Ownership of Intellectual Property</h4>
                                    <p>You agree that We (including Our partners, licensors and/or associates) own all intellectual property rights in and to the software underlying the creation of Our Platform, including all material and content published by Us on Our Platform, which includes (but is not limited) to the following:</p>
                                    <p>1. Our Contests</p>
                                    <p>2. Our software/technology</p>
                                    <p>3. Our advertisements</p>
                                    <p>4. Our written/published content</p>
                                    <p>5. Our images, graphics, photographs, illustrations</p>
                                    <p>6. Our marks, logos, trade name</p>
                                    <p>7. Audio and visual clippings used and published by Us</p>
                                    <p>8. Flash animation (“Our Intellectual Property Rights/Our Content”)</p>

                                    <h4>Prohibited Actions</h4>
                                    <p>You agree that in accessing Our Intellectual Property Rights, You shall not do the following without Our prior written consent:</p>
                                    <p>1. Modify, distribute, publish, transmit, reproduce, or otherwise deal with Our Intellectual Property Rights; or</p>
                                    <p>2. Create derivative works of Our Intellectual Property Rights or in any way exploit Our Intellectual Property Rights.</p>

                                    <h4>Your Content</h4>
                                    <p>You agree that:</p>
                                    <p>1. You own all the intellectual property rights in Your content;</p>
                                    <p>2. Your content will not result in any infringement claims from any third party; and</p>
                                    <p>3. We are not liable for any of Your content shared and/or contributed by You on Our Platform.</p>

                                    <h4>License to Use Your Content</h4>
                                    <p>You grant us a worldwide, non-exclusive, royalty-free, sublicensable, irrevocable, and transferable license to use Your content for the following:</p>
                                    <p>1. Use, reproduce, distribute, publish, and transmit Your content; and</p>
                                    <p>2. Otherwise, create any derivative works of the User Content for the following purposes:</p>
                                    <ul>
                                        <li>Display of User Content on Our Platform;</li>
                                        <li>Distribution and/or storage of User Content (either electronically or via other media) for any purpose;</li>
                                        <li>Storing Users' Content in a remote database accessible by Users, for a charge.</li>
                                    </ul>

                                    <h2>11.	PRIVACY POLICY</h2>
                                    <p>All Your personal information collected (including financial data) is subject to Our Privacy Policy which is available at Privacy Policy. You are encouraged to review this Privacy Policy to understand the data we collect and the purpose for which such data is collected.</p>

                                    <h2>Grievance Redressal Mechanism</h2>

                                    <p>In case you have any complaints or grievance pertaining to (i) any User Content that You believe violates these Terms including any infringement of Intellectual Property Rights, (ii) Your access to the Platform, please share the same with Us by writing to:</p>

                                    <h4>Grievance Redressal Officer</h4>

                                    <p>The officer receiving such a complaint, grievance, or notice may reach out to You to seek further clarification or to verify Your complaint. The name and title of the Grievance Redressal Officer are as follows:</p>

                                    <p><strong>Email:</strong> support@playnif50.com</p>

                                    <p>The Grievance Officer identified above is pursuant to the provisions of Applicable Laws including but not limited to the Information Technology Act, 2000, and the Consumer Protection Act, 2019, and the Rules enacted under those laws. The Company reserves the right to replace the Grievance Redressal Officer at its discretion through the publication of the name and title of such replacement on the website, which replacement shall come into effect immediately upon publication.</p>

                                    <p>You agree that regardless of any statute or law to the contrary, any complaints or grievances arising out of or related to the use of Our Platform or these Terms should be filed within thirty (30) days of such claim to enable us to resolve Your complaint at the earliest.</p>
                                    <h2>13.	LEGALITY</h2>
                                    <p>Fantasy Gaming/fantasy guess offered by Us on our platform is a game of skill and a legally and constitutionally protected business not amounting to betting, gambling and wagering held by the Supreme Court of India and different High Courts of India in multiple judgments for several other skilled gaming platforms.</p>
                                    <p>These Contests require You to use Your knowledge, judgement and expertise to primarily determine Your success in such Contests rather than relying on chance.</p>
                                    <h2>14.	PUBLICITY</h2>
                                    <p>By accepting a prize, You grant Us and Our affiliates an irrevocable, royalty-free, worldwide, perpetual license to use Your name, likeness, image, voice and comments/ testimonials for any purpose, including but not limited to advertising and promotional purposes in any media.</p>
                                    <p>We may organize promotional activities for which We may require Your presence. We will communicate the details of these activities to You. These promotional activities may include press events, internal meetings and ceremonies/functions.</p>
                                    <h2>Limitation of Liability and Indemnification</h2>
                                    <p>i.	By accessing Our Platform, You hereby agree to indemnify Us and/ or any of Our directors, employees, partners, affiliates, associates and licensors (“Representatives”) against all liability, cost, loss, claims or expense arising out of Your access to Our Platform, arising due to any negligence on Your part and/ or any illegal act on Our Platform and/ or non-compliance with these Terms.</p>
                                    <p>ii.	Neither We nor Our partners, affiliates, licensors or associates shall be liable for any direct, indirect, incidental, special, or consequential damages arising out of Your use of or inability to use Our Services, even if We have been advised of the possibility of such damages.</p>
                                    <p>iii.	You, with this, waive each and every right You may have against Us and/ or Our Representatives for any injuries, accidents, or other events that may occur as a result of You accessing Our Platform, participating in Contests, or receiving Contest prizes. This waiver includes any known or unknown, anticipated or unanticipated events.</p>

                                    <h2>Governing Law and Dispute Resolution</h2>

                                    <p>i.The courts of Mumbai shall have exclusive jurisdiction to determine any and all disputes related to Our Services [(including the Contest(s)] (“Dispute”) and grant interim relief in any Dispute referred to arbitration as given below. Any Dispute will be governed by the laws of the Republic of India.</p>

                                    <p>ii.If there is a legal Dispute, the party raising the Dispute must send a written notification (“Notification”) to the other party. The parties will then try to resolve the Dispute through amicable discussions. Suppose the dispute remains unresolved within fifteen (15) days of receiving the Notification, in that case, the dispute will be settled through arbitration. We will appoint a sole arbitrator to conduct the arbitration proceedings in English as per the provisions of the Arbitration and Conciliation Act, 1996, as amended from time to time. The seat and venue of arbitration shall be Delhi.</p>

                                    <p>iii.The arbitration award will be final and binding on the parties. Each party will pay for the costs of arbitration and equally share the arbitrator's fees unless the arbitral tribunal decides otherwise. The arbitrator can pass interim orders and awards, including orders for specific performance, and such orders would be enforceable in competent courts. The arbitrator shall give a reasoned award.</p>

                                    <p>iv .Nothing contained in these Terms shall restrict Us from seeking and obtaining interim or permanent equitable or injunctive relief or any other relief available to safeguard Our interest prior to, during or following the filing of arbitration proceedings or pending the execution of a decision or award in connection with any arbitration proceedings from any court having jurisdiction to grant the same. The pursuit of equitable or injunctive relief shall not constitute a waiver on Our part to pursue any remedy for monetary damages through the arbitration described herein.</p>

                                    <h2>17. OTHER TERMS</h2>
                                    <p>i. These Terms govern Your use of Our Platform and Services and supersede any prior agreements that You may have with Us.</p>
                                    <p>ii. Our failure to exercise or enforce any right or provision of these Terms shall not constitute a waiver of such right or provision.</p>
                                    <p>iii. In the event any of the provisions of these Terms are held to be invalid, illegal or unenforceable by any competent authority for any reason, the remaining portions of these Terms, if capable of substantial performance, will remain in full force and effect.</p>
                                    <p>iv. Our employees are not eligible to participate in any paid Public Contest, which is a Public Contest.</p>
                                    <p>v. You acknowledge that You may be subject to additional terms that govern your transactions on Our Platform. You agree that if there is any conflict between these terms and the additional terms, the additional terms will prevail.</p>
                                    <p>vi. We may assign our rights and liabilities in relation to the Services offered by Us to any entity as we may deem fit in course of our business activity.</p>

                                    <h2>18. DISCLAIMERS</h2>
                                    <p>i. We will not be liable for any delay or failure to render the Services resulting from any Force Majeure Event.</p>
                                    <p>ii. You may access Our Platform at Your own risk. We are not responsible or liable for any loss or damage (including injuries, death, or loss of property) that You or anyone else may suffer while accessing Our Platform.</p>
                                    <p>iii. You agree that Our Platform may contain third-party advertisements and links to websites/services owned and operated by Our affiliates and/or third parties (“Third Party Content”). We do not endorse the Third Party Content or services of any third parties included on Our platform. We cannot guarantee the accuracy, reliability or quality of such Third Party Content. Your reliance on Third Party Content is at Your own risk. Any claims that You have regarding Third-Party Content should be directed to the third party in question.</p>
                                    <p>iv. We will not be held responsible for any issues with the storage, deletion, delivery, or accessibility of information or materials to the extent allowed by law.</p>
                                    <p>v. We do not provide any warranty for Our Content, which is provided on an "as is, as available basis”.</p>
                                    <p>vi. We are not responsible for any errors or inaccuracies in the team starting line-up data provided on Our Platform, as it is obtained from external sources or publicly available information.</p>
                                    <p>vii. We are not responsible for any inaccuracies in calculating fantasy points or the selection of winners due to inaccurate or incomplete information received from any third-party service provider.</p>
                                    <p>viii. We make no representations or warranties regarding the quality, suitability or merchantability of any prizes and are not liable with respect to the same.</p>
                                    <p>ix. We will not be liable for your inability to access Our Platform for any reason beyond our control such as network outage, telecommunication failure, internet suspension, virus, malware etc.</p>
                                    <p>x. We are not responsible for any errors in communication, or omissions in communication, including any errors made by You, which may prevent the results from being communicated to You.</p>
                                    <p>xi. We are not liable for any consequences arising from You sharing any confidential information including but not limited to OTP with any other person.</p>











                                </div>



                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
export default TermAndCondition
