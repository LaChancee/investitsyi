import Layout from "./Layout";
import React from "react";
import Image from "next/image";
import mentions from "public/mentions.png";


export default function Mentions() {

    return (
        <Layout>
            <div
                className={"absolute -left-48 z-0 -top-48 z-0 w-1/2 h-full  bg-circle/30 rounded-full filter blur-3xl "}></div>
            <section className=" dark:bg-gray-900 relative">


                <div
                    className="grid relative z-10 max-w-screen-xl px-4 py-4 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                    <div className="grid place-content-end hidden lg:mt-0 lg:col-span-5 lg:flex top-1/3">
                        <Image src={mentions} alt={"Boy on his phone"}/>
                    </div>
                    <div className="mr-auto place-self-center lg:col-span-7">
                        <h1 className="max-w-2xl mb-4 text-4xl font-bold
                    tracking-tight leading-loose md:text-5xl
                    xl:text-7xl dark:text-white">
                            Mentions légales
                            et CGU
                        </h1>
                        <p className="max-w-2xl mb-6  text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">Mentions
                            légales Investissy
                        </p>

                    </div>

                </div>
            </section>
            <section>
                <div className={" grid gap-6 place-content-start mx-72  lg:mx-62"}>
                    <h2 className={" text-primary font-medium text-2xl"}>Mentions légales et CGU Mentions
                        légales Investissy</h2>
                    <div className={"grid gap-4"}>
                         <span>Le site Investissy, édité par la société Investissy, Société par Actions Simplifiée (SAS) au capital de 1.000€ immatriculée au
                        R.C.S de Paris sous le numéro 915 186 670, sis au 231 rue saint honoré, 75001 Paris, contact@investissy.com</span>
                        <span>
                        Directeur de la publication : Monsieur Mathis FRAIN L’hébergement du site est assuré par la société OVH,
                        Société par Actions Simplifiée dont le siège social est : 2 rue Kellermann – 59100 Roubaix – France.</span>
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>Conditions Générales d'Utilisation
                        Investissy </h2>
                    <h2 className={" text-primary font-medium text-2xl"}>1. Acceptation des Conditions
                        d’Utilisation </h2>
                    <div className={"grid gap-4"}>
                        <span>En naviguant sur le Site, l’Internaute accepte les Conditions d’Utilisation sans réserve. A
                        défaut d’acceptation des Conditions d’Utilisation, l’Internaute comprend qu’il ne doit pas
                            utiliser le Site de quelque façon que ce soit.</span>

                        <span>Ces Conditions d’Utilisation devront être considérées comme celles applicables au moment de
                        leur acceptation qu’elle soit tacite ou expresse.</span>

                        <span>Les Conditions d’Utilisation s’appliquent sans limitation de durée sous réserve de l’Article
                        11, pendant toute la durée de navigation sur le Site, et s’agissant d’un Membre, pendant la
                        durée d’utilisation de l’espace personnel et jusqu’à ce que de nouvelles conditions remplacent
                        les présentes ou résiliation prononcée dans le cadre de l’Article 11.</span>
                    </div>

                    <h2 className={" text-primary font-medium text-2xl"}>2. Inscription </h2>
                    <div className={"grid gap-4"}>
                        Pour devenir Membre, l’Internaute doit (de façon cumulative et sans dérogation possible) :
                        <ul className={"list-disc ml-8"}>
                            <li>
                                créer un compte personnel sur le Site,
                            </li>
                            <li>
                                acquérir une adhésion pour obtenir la version Premium,
                            </li>
                            <li>
                                renseigner les différents champs du formulaire d’inscription sur le Site,
                            </li>
                            <li>
                                confirmer son acceptation des Conditions d’Utilisation,
                            </li>
                            <li>
                                lire et accepter l’ensemble des avertissements sur les risques liés à
                                l’investissement.
                            </li>
                        </ul>


                        <span>L’inscription n’est effective qu’après satisfaction de l’ensemble des conditions mentionnées
                        ci-dessus et acceptation du profil par l’équipe Investissy. Investissy se réserve le droit
                        d’accepter ou de refuser toute inscription en, sans aucune obligation de justification de sa
                        décision ni aucune indemnité.</span>
                        <span>En remplissant le formulaire d’inscription, le Membre garantit à Investissy avoir fourni des
                        informations exactes, véridiques, à jour et complètes concernant son identité, ses
                        coordonnées et l’ensemble des informations supplémentaires demandées.</span>

                        Le Membre est invité notamment à communiquer une adresse électronique qui sera utilisée pour
                        :
                        <ul className={"list-disc ml-8"}>
                            <li> l’ensemble du processus d’identification du Membre (notamment pour accéder à son
                                compte
                                personnel),
                            </li>
                            <li>la confirmation des opérations réalisées par le Membre sur son compte personnel,</li>
                            <li>pour la communication aux Membres de tout élément concernant son compte personnel,
                                et
                            </li>
                            <li>l’ensemble des informations relatives à l’utilisation des Services disponibles sur le
                                Site.
                            </li>
                        </ul>

                        <span>Dans l’hypothèse où le Membre souhaiterait procéder à la modification de ses moyens
                        d’identification, il lui suffit de se rendre sur le Site et de modifier ses paramètres dans la
                        rubrique « Mon Compte » ou de contacter Investissy par courrier électronique à l’adresse
                        électronique suivante : support-membre@investissy.com</span>

                        <span> Dans la mesure où ses moyens d’identification seront parvenus entre les mains de tiers par sa
                        faute, le Membre sera seul responsable de toute utilisation de ces moyens d’identification et de
                        l’utilisation des Services faite en conséquence.</span>
                        <span>
                           Le Membre s’engage à maintenir constamment à jour les informations fournies à Investissy dans
                        le cadre de l’utilisation du Site en informant Investissy de tous les changements qui peuvent
                        affecter ses déclarations par courrier électronique à l’adresse électronique suivante :
                        support-membre@investissy.com
                       </span>

                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>3. Accès au Site </h2>

                    <div className={"grid gap-4"}>
                        <span> L’ensemble des informations de présentation des opportunités d’investissement et l’accès à
                        l’espace personnel sont exclusivement réservés aux Membres.</span>
                        <span> L’achat de l’adhésion permet d’accéder à l’entièreté du Site. Le Membre est seul
                        responsable de tout usage qui pourrait être fait de ses accès privés (identifiant et mot de
                        passe) seul garant de sa sécurité, ainsi que de toute utilisation de son compte.</span>
                        <span>Le Membre s’engage à informer Investissy immédiatement de toute utilisation non autorisée de
                        son compte et de toute atteinte à la confidentialité et à la sécurité de ses moyens
                        d’identification, par courrier électronique à l’adresse électronique suivante :
                        support-membre@investissy.com</span>
                        <span>Si Investissy a des motifs légitimes de penser que la sécurité du Site est compromise ou que
                        celui-ci est mal utilisé du fait d’une utilisation non autorisée des moyens d’identification
                        du Membre, elle pourra procéder à la suspension temporaire du compte afin notamment de
                        préserver l’intégrité du Site et des données, et, si cela apparaît approprié, exiger la
                        modification de ces moyens d’identification.</span>

                        Le Membre reconnaît disposer de la compétence et des moyens nécessaires pour accéder au Site
                        et l’utiliser.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>4. Description des Services </h2>
                    <div className={"grid gap-4"}>

                        Les Services proposés aux Membres sont les suivants :
                        <ul>
                            <li>Accéder aux Investissements (ci-après le « Service 1 ») ;</li>
                            <li>Investir dans une société crée par le Investissy dédiée à la prise de
                                participation dans
                                uninvestissement (ci-après le « Service 2 ») ;
                            </li>
                            <li> Accéder aux événements organisés par Investissy (ci-après le « Service 3 »).</li>
                            <li></li>
                        </ul>


                        Investissy offre à ses Membres un accès à des informations publiées sur son Site concernant
                        des Startups qui souhaitent réaliser des levées de fonds et qui dans ce cadre, souhaitent
                        proposer à des investisseurs, l’opportunité de participer à cette levée de fonds, en
                        réalisant un investissement, généralement dans le cadre d’une augmentation de capital ou
                        l’acquisition de titres ou actions, dans les conditions et selon les modalités décrites
                        ci-après.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>4.1 Service 1 : service de présentation des
                        Startups</h2>
                    <h2 className={" text-primary font-medium text-2xl"}>4.1.1 Présentation du Service 1</h2>

                    <div className={"grid gap-4"}>
                        <span>
                           Investissy fournit un Service qui consiste à présenter aux Membres sur son Site des
                        informations à caractère général sur les Startups, Crypto-monnaies, Immobilier et NFT qui
                        souhaitent réaliser une levée de fonds ou vendre des actions ou titres.
                        </span>
                        <span>
                            Pour présenter une Startups, Crypto-monnaies, NFT ou Immobilier sur son Site, Investissy
                        conclut avec chaque Entités une convention de prestation de services qui précise les
                        conditions et modalités de présentation de l’entité et de son projet de levée de fonds ou de
                        ventes d’actions ou titres aux Membres.
                        </span>

                        Il est à cet égard précisé que la levée de fonds recherchée par l’entité peut prendre,
                        sans que cette liste soit limitative, différentes formes : augmentation de capital, émission
                        d’un emprunt obligataire ou émission de valeurs mobilières donnant accès au capital.
                        Investissy procède à une étude et à une analyse préalable de chaque Entité et de son
                        projet de levée de fonds préalablement à sa présentation sur son Site.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>4.1.2 Absence de conseil en investissement
                        financier</h2>
                    <div className={"grid gap-4"}>
                        <span>Les Membres sont informés que le Service 1, tel que visé et régi
                        par les présentes se définit uniquement en une activité de mise à disposition d’informations
                        à caractère générale sur la Startup.</span>
                        <span>Dès lors, en aucun cas un Membre ne pourra considérer que le Service 1 fourni par Investissy
                        puisse être assimilé d’une quelconque façon à un service de conseil en investissement
                        financier encadré par l’article L. 321-1 et D. 321-1 du Code monétaire et financier. A cet
                        égard, les Membres en s’inscrivant reconnaissent et acceptent que :</span>

                        <span>(I) le Service 1 fourni ne relève pas d’une activité de conseil en investissement financier,
                        telle que régie par les dispositions du Code monétaire et financier;
                            </span>
                        <span>
                        (II) l’accès des Membres au Service 1 ne constitue en aucun cas une recommandation
                        personnalisée d’investissement ; et</span>
                        <span>(III) Investissy ne fournira aucun conseil aux Membres et ne procédera à aucun suivi des
                        investissements réalisés par les Membres au travers du Service 1.</span>

                        <span>
                             En aucun cas Investissy ne procède à une étude approfondie en opportunité des conditions et
                        modalités de l’opportunité d’investissement présentée par une Startup aux Membres. En
                        conséquence Investissy, en présentant sur son Site une Startup et son projet d’investissement,
                        ne délivre aucune opinion de quelque nature que ce soit sur les mérites et intérêts de cette
                        Startup et de son projet, le bien fondé d’un investissement dans cette Startup, ou encore sur
                        les avantages, potentialités de gains ou de rentabilité, ou inversement inconvénients ou
                        risques de pertes en capital d’un tel investissement.
                        </span>

                        <span> Il appartient à chaque Membre, lorsqu’il envisage de réaliser un investissement dans une
                        Startup présentée sur le Site de s’assurer, au moyen de ses propres diligences, études et
                        analyses et le cas échéant celles de professionnels avisés et compétents, que cet
                        investissement s’inscrit dans sa stratégie de placement et correspond à sa situation
                        personnelle, financière, patrimoniale et fiscale.</span>

                        <span>
                            Il est donc recommandé à chaque Membre que celui-ci procède, pour chaque investissement
                        envisagé dans une Startup, à une analyse précise et détaillée:
                        </span>
                        <span>
                            (I) de sa capacité financière à supporter le risque économique de l’investissement
                        envisagé,
                        </span>
                        <span>
                            (II) qu’il dispose de moyens suffisants pour subvenir à ses besoins actuels et futurs et ceux
                        de sa famille et de ses proches, et
                        </span>
                        <span>
                            (III) ne pas avoir de besoin de liquidité eu égard à l’investissement envisagé.
                        </span>
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>4.1.3 Connaissance des principes généraux de
                        la gestion de patrimoine</h2>
                    <div className={"grid gap-4"}>
                        <span> Le Membre déclare expressément connaître et appliquer les règles essentielles de gestion de
                        patrimoine concernant l’investissement au capital d’entreprises non cotées, dont notamment les
                        principes suivants :</span>
                        <ul className={"list-disc ml-8"}>
                            <li>Ne pas investir plus de 5 à 10% de son patrimoine hors immobilier dans cette classe
                                d’actifs,
                            </li>
                            <li>Ne pas investir de l’épargne qui pourrait être éventuellement nécessaire à court ou
                                moyen
                                terme,
                            </li>
                            <li>Diversifier au maximum ses investissements au sein de cette classe d’actif, de manière
                                à ce
                                quechaque investissement ne représente jamais plus de 10% du portefeuille investi ; et
                            </li>
                            <li>Le retour sur investissement dépend de la réussite du projet financé</li>
                        </ul>


                        Ces points généraux sont rappelés à titre informatif, sans que le respect de ceux-ci
                        caractérise une quelconque obligation à l’endroit de Investissy.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>4.1.4 Lutte contre le blanchiment de capitaux -
                        KYC</h2>
                    <div className={"grid gap-4"}>
                        <span>
                            Le Service 1 proposé par Investissy se limitant à une présentation des Startups et leur
                        projet de levée de fonds aux Membres, les Membres sont informés que Investissy n’est pas un
                        intermédiaire financier légalement tenu de respecter la règlementation relative à la lutte
                        anti-blanchiment et le financement du terrorisme et la fraude fiscale.
                        </span>

                        <span>
                            Toutefois, Investissy se réserve le droit de demander à tout Membre, lors de son adhésion ou
                        ultérieurement, les informations le concernant exigés par la règlementation relative à la
                        lutte anti-blanchiment et le financement du terrorisme et la fraude fiscale.
                        </span>

                        A ce titre, Investissy se réserve le droit de notamment demander la production des documents
                        suivants :
                        <ul className={"list-disc ml-8"}>
                            <li>copie de sa carte d’identité ;</li>
                            <li>justificatif de domicile ;</li>
                            <li>formulaire sur l’origine de ses revenues et de son patrimoine ;</li>
                            <li>S’il est une personne morale: Kbis, copie de ses derniers comptes, Statuts, la liste des
                                bénéficiaires effectifs ayant plus de 25 % de son capital.
                            </li>
                        </ul>
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>4.2 Service 2 : Investir dans une société
                        crée par le Investissy dédiée
                        à la prise de participation dans une Entité cible</h2>
                    <div className={"grid gap-4"}>
                        <span>
                            La souscription de titres financiers s’effectue via des véhicules d’investissement créés par
                        le Investissy. L’équipe Investissy s’occupe de créer juridiquement le véhicule
                        d’investissement afin que les Membres puissent y prendre une participation. C’est ensuite ce
                        même véhicule d’investissement créé pour l’occasion qui prend la participation dans
                        l’Entité.
                        </span>
                        <span> Le Service 2 se déroulera en deux (2) phases : une phase d’intention au cours de laquelle
                        chaque Membre pourra marquer une intention de souscrire des titres financiers du véhicule
                        d’investissement dédié à la prise de participation dans une Entité (la « Période
                        d’Intention ») et une phase de souscription au cours de laquelle le Membre ayant marqué une
                        intention pendant la Période d’Intention doit effectivement souscrire les titres financiers du
                        véhicule d’investissement dédié à la prise de participation dans une Entité et libérer sa
                        souscription (la « Période de Souscription »).</span>

                        <span>Dans l’hypothèse où à l’issue de la Période d’Intention, les intentions marquées par tous
                        les Membres excèderaient le montant maximum à investir dans le véhicule d’investissement
                        dédié à la prise de participation dans une Entité, Investissy sélectionnera les Membres
                        pouvant participer à l’investissement en utilisant l’Algorithme. Dans ce cas, les Membres
                        titulaires d’un Bon de Priorité et souhaitant l’utiliser dans le cadre de cette opportunité
                        d’investissement ne seront pas soumis à l’Algorithme et pourront de plein droit souscrire des
                        titres financiers du véhicule d’investissement dédié à la prise de participation dans une
                        Entité.</span>

                        Par ailleurs, les membres titulaires d’une intention à l’issue de la Période d’Intention qui
                        n’auraient pas effectivement souscrit les titres financiers du véhicule d’investissement
                        dédié à la prise de participation dans une Entité et libérer sa souscription dans les
                        quinze (15) jours suivant le début de la Période de Souscription pourront être exclus de
                        l’opportunité d’investissement et les frais de gestion prévue à l’Article 5.2 resteront dus
                        à Investissy.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>4.3 Service 3 : Accéder aux événements
                        organisés par Investissy</h2>
                    <div className={"grid gap-4"}>Investissy créera un outil permettant l’accès de ses Membres à des
                        évènements organisés par Investissy.
                        <span>Investissy ne garantit pas un volume d’événement et les Membres comprennent qu’ils peuvent
                        n’avoir accès à aucun événement si aucun événement n’est créé par Investissy.</span>

                        A ce jour, le Service 4 n’est pas encore opérationnel.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>5. Rémunération de Investissy</h2>
                    <div>Les Services proposés par Investissy sont à caractère onéreux. Les conditions tarifaires
                        applicables aux Membres sont rappelées ci-dessous.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>5.1 Adhésion</h2>
                    <div>
                        L’inscription en tant que Membre Premium sur Investissy est payante et valable un mois. Les
                        coûts de cette inscription dépendent de la formule choisie :
                    </div>
                    <div className={"grid grid-cols-3 w-1/2"}>
                        <div className={"grid"}>
                            <span className={"font-medium"}>Nom</span>
                            <span>Intro</span>
                            <span>Base</span>
                            <span>Pro</span>
                        </div>
                        <div className={"grid"}>
                            <span className={"font-medium"}>Coûts € TTC</span>
                            <span>0.00</span>
                            <span>15.00</span>
                            <span>25.00</span>
                        </div>
                        <div className={"grid"}>
                            <span className={"font-medium"}>Durée des droits </span>
                            <span>1 mois</span>
                            <span>1 mois</span>
                            <span>1 mois </span>
                        </div>

                    </div>
                    <span>Le paiement de l’offre s’effectue de manière exclusive par carte bancaire directement sur le Site,
                            grâce au module de paiement sécurisé.</span>
                    <span>A l’issue de la période de 1 année, l’adhésion prend fin et les droits liés à celle-ci sont stoppés.</span>
                    <h2 className={" text-primary font-medium text-2xl"}>5.2 Frais de gestion</h2>
                    <div className={"grid gap-4"}>
                        Investissy perçoit, dans le cadre du Service 2, des frais de gestion fixés entre 3% et 5% sur
                        chaque investissement réalisé.
                        <span>a quote part de rémunération est fixée en fonction du statut du Membre et est dégressive
                        suivant l’importance de celui-ci comme présenté ci-dessous :</span>

                    </div>
                    <span className={"font-medium -mb-2.5"}>Montant des frais de gestion*</span>
                    <div className={"grid grid-cols-3 w-1/2"}>

                        <div className={"grid"}>

                            <span className={"font-medium"}>Intro</span>
                            <span className={"font-medium"}>Base</span>
                            <span className={"font-medium"}>Pro</span>
                        </div>
                        <div className={"grid"}>
                            <span>5%</span>
                            <span>4%</span>
                            <span>3%</span>
                        </div>
                    </div>
                    <span>* en pourcentage du montant pour chacun des investissements réalisés dans le cadre du Service 2</span>
                    <span>
                        Par ailleurs, 5% de l’investissement réalisé par le Membre dans le véhicule d’investissement créé par le Investissy sera conservé dans ledit véhicule d’investissement et ne sera pas investi dans la Startup concernée et ce, pour assurer le financement des frais de fonctionnement dudit véhicule d’investissement.</span>
                    <h2 className={" text-primary font-medium text-2xl"}>5.3 Frais sur les plus-values</h2>

                    <div className={"grid gap-4"}>
                        Investissy perçoit une commission de 20% sur le montant de chacune des plus-values réalisées
                        par les Membres dans les cas suivants :
                        <ul className={"list-disc ml-8"}>
                            <li>lorsque le véhicule d’investissement formés pour réaliser les investissements,
                                cèdent leurs
                                participations et réalisent, le cas échéant, une plus-value ;
                            </li>
                            <li>lorsque les Membres, dans le cadre du Service 3 ou en dehors de celui-ci, réalisent une
                                plus-value lors de la cession de leur participation.
                            </li>
                        </ul>
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>5.3 Frais sur les plus-values</h2>

                    <span>Le Membre reconnaît être informé que la cession de titres de capital de sociétés non
                        cotées est soumise à un droit d’enregistrement et que les plus-values sur cession de titres sont soumises à
                        imposition dans des conditions spécifiques à la situation particulière de chaque foyer fiscal.</span>
                    <h2 className={" text-primary font-medium text-2xl"}>6. Engagements et responsabilité de
                        Investissy</h2>
                    <div className={"grid gap-4"}>
                        <span>
                            Investissy s’engage à fournir les Services conformément aux Conditions d’Utilisation.
                        Investissy s’engage à fournir les Services avec diligence étant précisé qu’il pèse sur elle
                        une obligation de moyens, à l’exclusion de toute obligation de résultat, ce que le Membre
                        reconnaît et accepte expressément.
                        </span>
                        <span> Investissy ne garantit pas au Membre que les Services seront totalement exempts d’erreurs, de
                        vices ou de défauts ou qu’ils soient continuellement disponibles. En outre, les Services sont
                        standards et ne sont donc pas proposés à la seule intention d’un Membre, en fonction de ses
                        propres contraintes personnelles, ni pour répondre spécifiquement à ses besoins et attentes.</span>
                        <span>
                          Investissy ne pourra, en aucun cas, être tenue responsable des données, informations, et/ou du
                        contenu fourni par une Startup, accessible ou non au public, de l’absence de véracité desdites
                        données, informations, ou contenu, des erreurs ou omissions qu’ils pourraient comporter, ainsi
                        que des dommages consécutifs à l’utilisation de tout contenu, affiché ou transmis par
                        courrier électronique ou de toutes autres manières, via le Site.
                       </span>
                        <span>Investissy n’a pas d’obligation générale de surveillance des données et du contenu fournis
                        par les Membres ou les Startups ni d’obligation de suppression d’un contenu qui ne paraîtrait
                        pas manifestement illicite, malgré son signalement éventuel. Investissy se réserve cependant
                        le droit de supprimer les contenus émis par les Membres ou les Startups s’ils ne respectent pas
                        les critères de publication définis par Investissy.</span>
                        <span>Plus généralement, Investissy se réserve le droit, à tout moment et sans préavis, de
                        modifier toute information figurant sur le Site dans le cadre de sa mise à jour ou de la
                        correction d’erreurs ou d’inexactitudes.
                        Investissy n’est pas responsable du contenu des sites Internet tiers vers lesquels renvoient des
                        liens hypertextes présents sur le Site.</span>

                        Investissy s’engage à :
                        <ul>
                            <li> (I) faire ses meilleurs efforts pour assurer la sécurité du Site ;</li>
                            <li>(II) informer le Membre de toute difficulté raisonnablement prévisible, notamment
                                quant à la
                                mise en œuvre des Services ou au bon fonctionnement du Site ; et
                            </li>
                            <li>(III) procéder régulièrement à des contrôles afin de vérifier le fonctionnement et
                                l’accessibilité du Site.
                            </li>
                        </ul>


                        Investissy se réserve le droit de modifier à tout moment les modalités techniques d’accès
                        aux Services et/ou au Site en fonction, notamment, de l’évolution de la technologie ou de son
                        offre de services. Il appartient à l’Internaute et au Membre, chacun pour ce qui les concerne,
                        de veiller à ce que les outils ou équipements informatiques ou de télécommunication dont ils
                        disposent soient adaptés à ces évolutions.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>7. Clause de non garantie</h2>
                    <h2 className={" text-primary font-medium text-2xl"}>7.1 Non garantie de l'information contenue sur
                        le Site</h2>
                    <div className={"grid gap-4"}>
                        <span>Le Membre reconnaît et accepte expressément que Investissy ne garantit aucune information sur
                        les opérations financières présentées sur le Site. Toutes les informations sont présentées
                        par la Startup et sont de leur responsabilité exclusive. Les données sont basées sur des
                        informations considérées comme fiables, mais Investissy ne garantit en aucun cas qu’elles
                        soient exactes, complètes ou valides et ces informations ne doivent pas être considérées
                        comme telles à quelque fin que ce soit. Le Membre reconnaît expressément que Investissy
                        n’effectue aucune vérification et n’exerce aucun contrôle sur les informations</span>
                        <span>présentées par les Startups, et qu’il appartient à aux Membres de rassembler et vérifier
                        toutes les informations qu’ils jugeraient utiles pour prendre une décision d’investissement.</span>
                        <span>
                            L’ensemble du contenu figurant sur le Site est présenté à la date qui y est indiquée et « en
                        l’état ». Le contenu du Site peut faire l’objet de retards, omissions, erreurs ou
                        inexactitudes.
                        </span>
                        <span>Les estimations des valorisations des Startups présentes sur le Site ont été établies par
                        les Startups et sont présentées aux Membres sans que Investissy ait évalué la pertinence de
                        cette valorisation.</span>
                        <span>La mise en ligne de la valorisation sur le Site ne constitue en aucune manière une garantie de
                        la valeur de l’entreprise, et il appartient aux Membres de rassembler l’ensemble des
                        informations qu’ils estiment nécessaire pour apporter un jugement sur la valorisation proposée
                        et déterminer l’opportunité d’un investissement.</span>
                        <span> Le Membre reconnaît avoir été averti que, sauf mention contraire, les opérations proposées
                        sur le Site ne donnent pas lieu à un document d’information soumis au visa de l’Autorité des
                        Marchés Financiers.</span>
                        <span> Le Membre reconnaît expressément qu’aucun conseil et aucune information, qu’ils soient oraux
                        ou écrit, obtenus par le Membre de la part de Investissy ou lors de l’utilisation du Site ne
                        sont susceptibles de créer des garanties ou des obligations non expressément prévues par les
                        présentes Conditions d’Utilisation.</span>

                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>7.2 Non garantie des investissements réalisés
                        par l'intermédiaire du Site</h2>
                    <div className={"grid gap-4"}>
                        <span>Le Membre reconnaît expressément avoir pleinement conscience que tout investissement au
                        capital de Startups présente un risque élevé de perte de la totalité du capital investi et
                        d’absence totale de liquidité à l’issue de la période d’investissement souhaitée.</span>
                        <span>Le Membre détient exclusivement l’absolue maîtrise de la gestion de son patrimoine et conserve
                        la pleine et entière responsabilité de ses investissements. Il lui appartient de déterminer
                        ses investissements et placements avec discernement compte tenu de sa situation personnelle,
                        familiale, patrimoniale, financière et fiscale.</span>
                        <span>Le Membre reconnaît que tout investissement réalisé et découvert sur Investissy présente
                        des risques importants pour son patrimoine, tels qu’évoqués ci-dessus et déclare les accepter
                        sans réserve pour chacun des investissements qu’il réalise par l’intermédiaire du Site.</span>
                        <span>Le Membre s’engage expressément et irrévocablement à s’abstenir d’investir dans des produits
                        financiers présentés sur le Site, dans le cas où (i) le Membre estime que les informations
                        dont il dispose ne sont pas suffisantes pour apprécier pleinement l’opportunité
                        d’investissement, (ii) le Membre estime que sa compréhension du produit financier proposé et
                        des risques associés est insuffisante, (iii) sa situation personnelle, familiale, patrimoniale,
                        financière, fiscale ne lui permet pas d’investir sereinement au regard des risques présentés
                        par le produit financier dans lequel il envisage d’investir.</span>
                        <span> En tout état de cause, Investissy ne pourra en aucun cas être tenu pour responsable d’un
                        placement inapproprié et Investissy décline toute responsabilité quant aux conséquences de
                        toute nature, notamment financières, juridiques et fiscales, de la souscription de titres
                        financiers.</span>

                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>8. Engagement et responsabilité des
                        Membres</h2>
                    <div className={"grid gap-4"}>
                        <span>Respect de la réglementation en vigueur. Le Membre déclare se conformer strictement à toutes
                        les dispositions légales, réglementaires et administratives lui étant applicables et dont la
                        violation pourrait porter atteinte à sa capacité à s’obliger dans le cadre des Services.</span>
                        <span>Exactitude des informations fournies. Le Membre s’engage à fournir à Investissy toutes les
                        informations et/ou documents nécessaires à la bonne exécution des présentes pour la
                        fourniture des Services et plus généralement, à coopérer activement avec Investissy en vue
                        de la bonne exécution des présentes. Si le Membre ne se conforme pas à cette obligation,
                        Investissy se réserve le droit de suspendre les Services jusqu’à obtention des informations ou
                        documents requis. Le Membre garantit à Investissy que toutes les informations et documents
                        qu’il fournit à Investissy, sont exactes, à jour et sincères au jour où elles sont
                        communiquées à Investissy et ne sont entachées d’aucun caractère trompeur ou de nature à
                        induire en erreur. Si les informations et/ou documents fournis deviennent inexacts ou obsolètes
                        pendant la durée des Conditions d’Utilisation, le Membre s’engage à les mettre à jour et/ou
                        à transmettre une version à jour des documents concernés sur le Site dans les meilleurs
                        délais. Plus généralement, il appartient au Membre de notifier formellement à Investissy
                        tout changement des informations le concernant. Investissy n’est pas responsable de tout dommage
                        pouvant découler d’une inexactitude ou d’un changement dont il n’a pas été avisé.</span>
                        <span> Protection des codes d’accès personnels. Les mots de passe et identifiants permettant
                        d’accéder au compte personnel du Membre sont personnels, le Membre s’engage à ne pas les
                        divulguer et à en protéger la confidentialité. A ce titre, le Membre est seul responsable de
                        leur utilisation et toute utilisation du Site par un tiers avec les identifiants d’un Membre est
                        réputée faite sous sa responsabilité et avec son accord.</span>
                        <span>Utilisation personnelle du Site et des Services. Le Membre s’engage à faire un usage
                        strictement personnel du Site et des Services, et à ne permettre à aucun tiers de les utiliser
                        à sa place ou pour son propre compte, sauf à en supporter l’entière responsabilité. Le
                        Membre comprend et accepte que Investissy présume que la personne qui utilise (sauf
                        notification préalable du Membre à Investissy indiquant le contraire) le Site et les Services
                        au nom et pour le compte du Membre, dispose des pouvoirs et de l’autorité requise pour le
                        faire. Le Membre s’engage à, si un événement conduisant à l’utilisation du Site par un tiers
                        ou toute autre personne non autorisée, devait se produire, en informer immédiatement
                        Investissy.</span>
                        <span>Engagement de confidentialité. Le Membre aura accès à des informations détaillées sur les
                        Startups présentés sur le Site. Le Membre s’engage envers Investissy, pendant toute la durée
                        de son inscription sur le Site, et jusqu’à 2 ans après sa désinscription, à (i) ne pas
                        divulguer à un tiers, en tout ou en partie, les informations considérées comme
                        confidentielles, c’est-à-dire accessibles depuis le Site uniquement après identification, sans
                        l’accord de Investissy et de la Startup concernée ; (2) ne pas utiliser ces informations dans
                        un autre but que l’étude de l’opportunité d’investir dans les Startups présentés sur le Site
                        et par son intermédiaire ; (3) ne pas prendre de participation en direct dans la Startup sous
                        peine de voir son adhésion résiliée. L’adhésion au Investissy entraîne l’obligation de
                        prendre des participations dans les Startups proposées à travers le véhicule d’investissement
                        dédié créé par le Investissy.</span>
                        <span> Utilisation du Site et des Services. L’Internaute et le Membre s’engagent, chacun pour ce qui
                        les concerne, à : (i) ne pas violer ou tenter de violer, scanner ou tester la vulnérabilité,
                        du système de sécurité et des systèmes connexes du Site ; (ii) ne pas accéder ou tenter
                        d’accéder à toute donnée qui n’est pas destinée à l’Internaute ou au Membre ; (iii)
                        s’abstenir d’interférer avec le fonctionnement normal du Site ou d’effectuer toute action qui
                        risquerait de provoquer l’interruption ou la dégradation d’un ou plusieurs Services ; (iv) ne
                        pas télécharger vers les Services, afficher, envoyer par courrier électronique ou transmettre
                        de toute autre manière tout matériel contenant des virus logiciels ou autres codes
                        informatiques, des fichiers ou des programmes conçus pour interrompre, détruire ou limiter la
                        fonctionnalité du Site ; et (v) ne pas tenter d’interférer avec les Services de tout autre
                        Membre ou utilisateur, hôte ou réseau, y compris, mais sans s’y limiter, exposer les Services
                        à un virus, créer une surcharge du serveur, inonder le serveur, inonder les services de
                        messagerie.</span>

                        Le Membre reconnaît avoir pris connaissance des caractéristiques et contraintes, notamment
                        techniques, de l’ensemble des Services. Le Membre est seul responsable de son utilisation des
                        Services. L’Internaute et le Membre sont informés et acceptent, chacun pour ce qui les
                        concerne, que la navigation l’utilisation du Site et des Services nécessite une connexion
                        Internet et que la qualité des Services peut dépendre de cette connexion ainsi que
                        d’équipements informatiques et/ou de logiciels tiers, dont ils sont les seuls responsables.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>9. Protection des données personnelles et
                        politique de confidentialité</h2>
                    <div className={"grid gap-4"}>
                        <span>
                            Dans le cadre de l’utilisation du Site, Investissy recueille des informations nominatives sur
                        ses Membres. Investissy s’engage à respecter la législation en vigueur relative à la
                        protection de la vie privée eu égard au traitement automatisé des données à caractère
                        personnel telles que ces notions et ce régime sont prévus par le Règlement (UE) 2016/679 du
                        parlement européen et du conseil du 27 avril 2016 relatif à la protection des personnes
                        physiques à l’égard du traitement des données à caractère personnel et à la libre
                        circulation de ces données, et abrogeant la directive 95/46/CE (RGPD).
                        </span>
                        <span>
                             Investissy s’engage à tenir confidentielle toute information personnelle fournie par ce biais.
                        Ces informations sont destinées exclusivement à Investissy à des fins de traitement interne
                        et ne seront en aucun cas cédées à des tiers en vue d’un usage commercial. Ces informations
                        et données sont également conservées à des fins de sécurité, afin de respecter les
                        obligations légales et règlementaires auxquelles Investissy est soumise. Ces données sont
                        traitées et stockées chez l’hébergeur du Site identifié au sein des mentions légales
                        figurant sur le Site dans des conditions visant à assurer leur sécurité.
                        </span>
                        <span>Investissy se réserve le droit d’utiliser de manière anonyme les informations personnelles
                        collectées, de même que les informations techniques et de navigation, tel que le type de
                        navigateur, l’adresse de protocole Internet, les pages visitées et le temps moyen passé sur le
                        Site, en vue de toutes activités liées à l’analyse et la promotion du Site.</span>
                        <span> Le Membre est informé que les données le concernant pourront être divulguées en application
                        d’une loi, d’un règlement ou en vertu d’une décision d’une autorité règlementaire ou
                        judiciaire compétente ou encore, si cela s’avère nécessaire pour Investissy, dans le cadre
                        d’une procédure judiciaire.</span>
                        <span>Conformément à la réglementation RGPD, un droit d’accès, de modification, de suppression et
                        de rectification des informations personnelles est à la disposition de tout internaute dont les
                        données sont collectées. Ce droit peut être exercé en contactant Investissy par mail à
                        l’adresse suivante : support-membre@investissy.com</span>

                        Pour en savoir plus, vous pouvez consulter notre Politique de Confidentialité.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>10. Propriété intellectuelle</h2>
                    <div className={"grid gap-4"}>
                        Investissy est propriétaire du Site, tant dans ses composantes techniques que graphiques,
                        textuelles ou autres, à l’exclusion des contenus fournis par les Membres eux-mêmes et par les
                        Startups.
                        <span>
                           Investissy est donc seule titulaire de l’ensemble des droits de propriété intellectuelle
                        afférents au Site, à son contenu ainsi qu’aux bases de données assurant son fonctionnement,
                        et l’utilisation du Site ne donne aux Membres aucun droit sur l’un quelconque de ces éléments,
                        sous réserve des droits afférents aux contenus fournis par les Membre eux-mêmes et par les
                        Startups.
                        </span>
                        <span>L’acceptation des présentes Conditions d’Utilisation vaut reconnaissance par le Membre des
                        droits de propriété intellectuelle de Investissy ci-dessus énumérés et l’engagement de les
                        respecter.</span>

                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>11. Durée et résiliation</h2>
                    <div className={"grid gap-4"}>
                        <span> L’accès au Site est conclu pour une durée indéterminée à compter de l’acceptation par le
                        Membre des Conditions d’Utilisation sous réserve des stipulations prévues au présent Article.</span>
                        <span>Résiliation à l’initiative du Membre. Le Membre peut résilier son compte à tout moment du
                        Site, en adressant un mail à support-membre@investissy.com. Il n’aura alors plus accès au Site
                        et ne pourra plus utiliser les Services et n’aura pas droit au remboursement d’une quelconque
                        quote-part des frais prévus à l’Article 5.</span>

                        <span> Nonobstant ce qui précède, le Membre restera tenu par les obligations concernant la
                        réalisation d’une plus-value lors de la cession d’une participation stipulées à l’article 5.3
                        des présentes Conditions d’Utilisation et ce jusqu’à la détention d’au moins une action d’un
                        véhicule d’investissement créé par le Investissy.</span>
                        <span> Résiliation de plein droit. Sans préjudice de tous dommages et intérêts que Investissy
                        pourrait réclamer, Investissy se réserve, à tout moment, le droit de suspendre ou mettre fin
                        à l’accès du Membre au Service et/ou résilier de plein droit, sans préavis ni indemnité ou
                        remboursement d’une quelconque quote-part des frais prévus à l’Article 5, la relation
                        contractuelle découlant de l’acceptation des Conditions d’Utilisation en cas, notamment, de :</span>
                        <ul className={"list-disc ml-8"}>
                            <li>contournement ou tentative de contournement des mesures techniques de protection mises
                                en place
                                parInvestissy, de fourniture d’informations fausses, trompeuses ou inexactes, lors de
                                son
                                inscription au Service ou durant son utilisation des Services ;
                            </li>
                            <li>diffusion ou utilisation des informations fournies dans l’espace personnel de façon
                                contraire
                                à leur destination ;
                            </li>
                            <li> fraude, sous quelque forme que ce soit, ou tentative de fraude, quelle qu’en soit la
                                forme, lors
                                de son inscription au Service ou durant son utilisation des Services ;
                            </li>
                            <li>non-paiement total ou partiel par le Membre de la rémunération due à Investissy telle
                                que
                                celle-ci est prévue à l’Article 5 ;
                            </li>
                            <li>non-respect de l’un quelconque des engagements par les présentes Conditions
                                d’Utilisation ;
                            </li>
                            <li>agissements déloyaux ou contraires aux intérêts commerciaux de Investissy.</li>
                        </ul>
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>12. Réclamations</h2>
                    <div className={"grid gap-4"}>
                        En cas de réclamation concernant le Site de Investissy et les Services, l’Internaute ou le
                        Membre devra présenter une demande écrite au service clientèle de Investissy à l’adresse
                        suivante : contact@investissy.com
                        <span> Investissy s’oblige à apprécier et traiter dans les meilleurs délais la recevabilité de la
                        demande.</span>

                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>13. Intégrité du contrat</h2>
                    <div>Si une ou plusieurs des clauses des Conditions d’Utilisation étai(en)t déclarée(s) nulle(s)
                        en application d’une loi, d’un règlement ou à la suite d’une décision définitive d’une
                        juridiction compétente, les autres clauses garderont toutes leur force et leur portée dans la
                        mesure prise par ladite décision.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>14. Modification des Conditions
                        d'Utilisation</h2>
                    <div className={"grid gap-4"}>
                        Les Conditions d’Utilisation pourront être modifiées par Investissy, à tout moment et sans
                        préavis.
                        <span>Ces modifications seront notifiées par tout moyen que Investissy jugera approprié, et
                        notamment par courrier électronique.</span>

                        Si le Membre n’y fait pas opposition dans un délai de dix (10) jours, ces modifications seront
                        considérées comme approuvées et prendront effet à la date spécifiée dans la notification
                        adressée au Membre.
                    </div>
                    <h2 className={" text-primary font-medium text-2xl"}>15. Preuve</h2>

                    <span>L’envoi et le contenu de la correspondance ou de la communication sont établis par simple production d’une copie de celle-ci par Investissy.</span>
                    <h2 className={" text-primary font-medium text-2xl"}>16. Droit applicable</h2>
                    <div className={"grid gap-4"}>Les présentes Conditions d’Utilisation sont soumises à la loi française. Compte tenu de la
                        dimension mondiale du réseau Internet, chaque Membre est invité à se conformer à toutes les
                        règles applicables dans le pays où il réside.
                        <span>Si les lois d’un pays interdisent l’activité de Investissy dans les conditions prévues aux
                        Conditions d’Utilisation, le Membre s’engage à ne pas recourir aux Services proposés par
                        Investissy.</span>

                        Dernière mise à jour le 04/05/2023
                    </div>
                </div>
            </section>

        </Layout>
    )
}