const ALL_CHARACTERS = [
    {
        "image": "https://media.starbiz.net/2020/09/10-facts-you-will-be-interested-in-talent-actress-seo-ye-ji.jpg",
        "title": "Seo Yea-ji",
        "description": "Seo Ye-ji is a South Korean actress. She began her acting career in the sitcom Potato Star 2013QR3. This was followed by major roles in period drama Diary of a Night Watchman, thriller Last, and fantasy Moorim School: Saga of the Brave. Her notable lead roles in television series include Save Me, and Lawless Lawyer."
    },
    {
        "image": "https://1.bp.blogspot.com/-c4qeK9vircE/YH4_DAyFIhI/AAAAAAAAKvA/NLIwau9rUNwBezMb2gnwdLFmpLPJ5pF2wCLcBGAsYHQ/s2048/210104_49.jpg",
        "title": "Vincenzo Cassano",
        "description": "At the age of eight, Park Joo-hyung was adopted by an Italian family. He later joins the mafia and is adopted by Don Fabio, head of the Cassano Family. Renamed “Vincenzo Cassano” he becomes a lawyer, a consigliere for the mafia, and Don Fabio's right-hand man. After Fabio dies, Paolo, Fabio's biological son and the new leader of the Cassano Family attempts to kill Vincenzo."
    },
    {
        "image": "https://6.vikiplatform.com/image/69a2b3861b594adcb4f7062a0ca128c6.jpg",
        "title": "Xing Fei",
        "description": "Xing Fei (Chinese: 邢菲; pinyin: Xíng fēi, born October 1, 1994), also known as Fair Xing, is a Chinese actress and singer. She is best known for her roles in the dramas Master Devil Do Not Kiss Me (2017), Miracle Healer (2017), Miracle Healer Season 2 (2018), Put Your Head on My Shoulder (2019), Your Highness Class Monitor (2019), Forget You Remember Love (2020), Moon Brightens for you (2020), My Little Happiness (2021) and Miss Crow with Mr Lizard (2021)."
    },
    {
        "image": "https://i.insider.com/5cb3c8e96afbee373d4f2b62?width=700",
        "title": "John Snow",
        "description": "Jon Snow is a fictional character in the A\n                                Song of Ice and Fire series of fantasy\n                                novels by American author George R. R.\n                                Martin, and its television adaptation Game\n                                of Thrones, in which he was portrayed by\n                                English actor Kit Harington. In the novels,\n                                he is a prominent point of view character."
    },
    {
        "image": "https://static.wikia.nocookie.net/marvelcinematicuniverse/images/3/35/IronMan-EndgameProfile.jpg/revision/latest/scale-to-width-down/350?cb=20190423175213",
        "title": "Iron Man",
        "description": "Iron Man is a superhero appearing in American comic books published by Marvel Comics. The character was co-created by writer and editor Stan Lee, developed by scripter Larry Lieber, and designed by artists Don Heck and Jack Kirby. The character made his first appearance in Tales of Suspense #39 (cover dated March 1963), and received his own title in Iron Man #1 (May 1968). Also in 1963, the character founded the Avengers alongside Thor, Ant-Man, Wasp and the Hulk."
    },
    {
        "image": "https://user-images.githubusercontent.com/110908424/194935422-a78e6e72-a191-4f0c-a7a6-b3620ec5256b.png",
        "title": "Maeve Wiley",
        "description": "Maeve is an intelligent and sarcastic social outcast and “bad girl”\n                                at Moordale\n                                Secondary School, who befriends Otis Milburn in sixth-form when the two begin a sex\n                                therapy clinic to\n                                make money off of their peers. She is a member of the Aptitude Scheme and Quiz Heads."
    },
    {
        "image": "https://i.scdn.co/image/ab67706c0000bebb9e4e96e77aecc3bbda585739",
        "title": "Tyrion Lannister",
        "description": "Lord Tyrion Lannister is the youngest child\n                                of Lord Tywin Lannister and younger brother\n                                of Cersei and Jaime Lannister. A dwarf, he\n                                uses his wit and intellect to overcome the\n                                prejudice he faces. He is the current Lord\n                                of Casterly Rock and Hand of the King to\n                                Brandon Stark."
    },
    {
        "image": "https://qph.cf2.quoracdn.net/main-qimg-dad62a963cb808ee114418dac958783d-lq",
        "title": "Srikant Tiwari",
        "description": "Srikant Tiwari, played by the veteran actor Manoj Bajpayee, is the main protagonist of the Indian web series The Family Man on Amazon Prime Video.Srikant is a middle-aged man who works for the Threat Analysis and Surveillance Cell in Mumbai and stays in a small apartment building on the outskirts of the city with his wife and two kids. He is mild-mannered in real life but does not hesitate to pull punches when needed."
    },
    {
        "image": "https://i1.sndcdn.com/artworks-8oF8tjvyjmdyWUGE-jLCOpw-t500x500.jpg",
        "title": "Daenerys Targaryen",
        "description": "Daenerys I Targaryen, also known as Daenerys Stormborn and Dany, was the only daughter of King Aerys II Targaryen and Queen Rhaella, and the younger sister of Rhaegar and Viserys Targaryen. Daenerys was initially a timid, obedient youth. After her marriage to Drogo, she gathered the confidence of his khalasar. Following his death, she expanded her dominion into Essos, gaining the loyalty of an army of Unsullied and liberating Slaver's Bay from the Ghiscari slave masters."
    },
    {
        "image": "https://images.squarespace-cdn.com/content/v1/52fc05c9e4b08fc45bd99090/1432319060004-RJZ96P7XM1NV473CXTBR/image-asset.png",
        "title": "Lancel Lannister",
        "description": "Lancel Lannister is the son of Ser Kevan Lannister and the nephew of Lord Tywin Lannister, the head of House Lannister and Lord of Casterly Rock. He is the first cousin of Jaime, Cersei, and Tyrion Lannister. He has the family blond hair and looks similar to his cousin Jaime. He was a squire to King Robert Baratheon. Robert, Renly, and Ser Barristan go on a hunt, frequently giving Robert wine and taking advantage of Robert's altercation with Renly when discussing Robert's ability to enjoy whores no matter the political background."
    },
    {
        "image": "https://m.media-amazon.com/images/M/MV5BYzAzYjU0ZDItMmZmNi00YzI3LWI0MTgtMDVhMzkwNTRkOTYxXkEyXkFqcGdeQWFybm8@._V1_QL75_UY281_CR0,0,500,281_.jpg",
        "title": "Super Mario",
        "description": "Mario has appeared in over 200 video games since his creation. Depicted as a short, pudgy, Italian plumber who resides in the Mushroom Kingdom, his adventures generally center on rescuing Princess Peach from the Koopa villain Bowser. Mario has access to a variety of power-ups that give him different abilities.",
    },
    {
        "image": "https://www.pinkvilla.com/files/styles/large/public/shaktimanunknownfactsmain.jpg",
        "title": "Shaktimaan",
        "description": "Shaktiman."
    },
    {
        "image": "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/04fd096e-205c-4c04-bdde-7ce9bc718319/de5dt7f-f51341f2-024f-46b0-b0c8-efdd8717b66f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzA0ZmQwOTZlLTIwNWMtNGMwNC1iZGRlLTdjZTliYzcxODMxOVwvZGU1ZHQ3Zi1mNTEzNDFmMi0wMjRmLTQ2YjAtYjBjOC1lZmRkODcxN2I2NmYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.9jsk9m5zUlOaIlV9C_MyYhcAoIjCDNla2STuf1Tg-xk",
        "title": "Humungousaur",
        "description": "Humungousaur is the Omnitrix's DNA sample of a Vaxasaurian from the\n                                planet Terradino.\n                                it is one of the ten alien's in Ben 10's omnitrix"
    },
    {
        "image": "https://www.refinery29.com/images/9657393.jpg",
        "title": "The Professor",
        "description": "Sergio Marquina, better known as The\n                                Professor ( Spanish: El Profesor ), is one\n                                of the main characters in the Netflix series\n                                Money Heist, portrayed by actor Álvaro\n                                Morte. He was the mastermind responsible for\n                                organizing the Royal Mint of Spain Heist and\n                                later oversaw the Bank of Spain Heist, which\n                                had been initially planned by Berlin."
    },
    {
        "image": "https://akns-images.eonline.com/eol_images/Entire_Site/2019420/rs_600x600-190520142251-600x600.stranger-things-eleven-lp.52019.jpg",
        "title": "Eleven",
        "description": "Jane \"El\" Hopper (born Jane Ives) and better\n                                known as just Eleven, is a main character in\n                                Stranger Things. She is portrayed by Millie\n                                Bobby Brown. Eleven was kidnapped as a\n                                newborn by Dr. Martin Brenner and raised in\n                                Hawkins National Laboratory,"
    },
    {
        "image": "https://user-images.githubusercontent.com/86323992/194938060-5bdab73e-1700-48b6-bc79-69b8afded447.jpg",
        "title": "OTIS",
        "description": "Otis Milburn is one of the main characters in Sex Education. He is\n                                portrayed by Asa Butterfield.\n                                He is an awkward teenager who struggles with his mother's occupation and her\n                                interference in his personal and sexual life"
    },
    {
        "image": "https://www.bollywoodhungama.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-23-at-10.45.54-AM.jpeg",
        "title": "Tokyo",
        "description": "Tokyo (Silene Oliveira) is a fictional\n                                character in the Netflix series Money Heist,\n                                portrayed by Úrsula Corberó. The de facto\n                                protagonist of the series, she is the\n                                unreliable narrator and a runaway robber who\n                                is scouted by the Professor to participate\n                                in his heists."
    },
    {
        "image": "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/a418552e4e66f5e1cfc6c356cd54da2f7d2374034a449f4d28f706b91d82be0e._RI_V_TTW_.jpg",
        "title": "Patlu",
        "description": "Motu aur patlu ki jodi"
    },
    {
        "image": "https://m.media-amazon.com/images/M/MV5BODY4Y2UyODUtYjkzNC00NmZlLWEzNWYtMTAxYmIzNGVlYmVkXkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
        "title": "Motu",
        "description": "Motu and Patlu, two friends living in Fufuri\n                                Nagar, always get themselves into hilarious\n                                situations and later rescued merely by luck,\n                                using the help from Ghasita Ram, Inspector\n                                Chingam and Dr. Jhatka."
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReoIEUpSoud29w7SVySAkUPORd6a07RsXTA&usqp=CAU",
        "title": "Thor",
        "description": "The warrior Thor (Chris Hemsworth) is cast\n                                out of the fantastic realm of Asgard by his\n                                father Odin (Sir Anthony Hopkins) for his\n                                arrogance and sent to Earth to live amongst\n                                humans. Falling in love with scientist Jane\n                                Foster (Natalie Portman) teaches Thor\n                                much-needed lessons, and his new-found\n                                strength comes into play as a villain from\n                                his homeland sends dark forces toward Earth."
    },
    {
        "image": "https://www.taylordailypress.net/wp-content/uploads/2022/03/Why-is-Mads-Mikkelsen-Grindelwald-better-than-Johnny-Depp.jpg",
        "title": "Gellert grindelwald",
        "description": "Gellert Grindelwald (c. 1882/1883 – March 1998) was a Dark Wizard who was considered to be amongst one of the most powerful and notorious wizards of all time, his only superiors being Albus Dumbledore and Lord Voldemort.[12] A student at Durmstrang Institute, Grindelwald was expelled for twisted, dark experiments and near-fatal attacks on students."
    },
    {
        "image": " assets/img/thomas_shelby.png ",
        "title": "THOMAS SHELBY",
        "description": "Thomas Michael Shelby, OBE, DCM, MM, MP is a\n                                fictional character born in 1890 in\n                                Birmingham, England, and the main\n                                protagonist in the British period crime\n                                drama Peaky Blinders. He is played by Irish\n                                actor Cillian Murphy, who has won an Irish\n                                Film & Television Award and National\n                                Television Award for his portrayal of\n                                Shelby. The character has received critical\n                                acclaim."
    },
    {
        "image": "https://www.michigandaily.com/wp-content/uploads/2022/04/fantastic-beasts-copy.jpg",
        "title": "Newt scamander",
        "description": "Newton Artemis Fido \"Newt\" Scamander,[2] O.M. (Second Class), (b. 24 February[1] 1897)[2] was an English wizard, famed Magizoologist and the author of Fantastic Beasts and Where to Find Them. Early in life, Scamander developed an interest in magical creatures, influenced by his mother's breeding of Hippogriffs."
    },
    {
        "image": "https://pbs.twimg.com/media/EMue68ZXUAIN6TZ.jpg",
        "title": "Kinsey Locke",
        "description": "Kinsey Locke is one of the three main protagonists of Netflix Locke &\n                                Key. As the only daughter of Locke family, she changes her appearance upon return to\n                                Matheson in hopes of blending in with the other locals. Unbeknownst to her—or anyone\n                                around her—her father gifted her the Anywhere Key in a gold bracelet worn around her\n                                wrist.She is played by Emilia Jone"
    },
    {
        "image": " https://nettv4u.com/imagine/12-01-2019/ritwik-bhowmik.jpg",
        "title": "Ritwik Bhowmik",
        "description": "Ritwik Bhowmik is an Indian actor known for\n                                portraying Radhe in Bandish Bandits and\n                                Sanket Bhadoria in The Whistleblower."
    },
    {
        "image": "https://i1.sndcdn.com/artworks-000207776101-ysy86n-t500x500.jpg",
        "title": "Chinchan",
        "description": "Crayon Shin-chan (Japanese: クレヨンしんちゃん, Hepburn: Kureyon Shin-chan), is\n                                a Japanese manga series written and illustrated by Yoshito Usui. Crayon Shin-chan made\n                                its first appearance in 1990 in a Japanese weekly magazine called Weekly Manga Action,\n                                which was published by Futabasha. Due to the accidental death of author Yoshito Usui,\n                                the manga in its original form ended on September 11, 2009."
    },
    {
        "image": "https://img.etimg.com/thumb/msid-91585647,width-650,imgsize-37952,,resizemode-4,quality-100/doctor-strange-2.jpg",
        "title": "Doctor Strange",
        "description": "Doctor Strange is a practising sorcerer who gains his abilities from\n                                mystical entities such as Agamotto, Cyttorak, Ikonn, Oshtur, Raggadorr, and Watoomb, who\n                                lend their energies to spells. The Cloak of Levitation, which gives Strange the ability\n                                to fly, the Eye of Agamotto, an amulet whose light is used to counteract evil magic, the\n                                Book of the Vishanti, a grimoire containing extensive knowledge of white magic, and the\n                                Orb of Agamotto, a crystal ball used for clairvoyance are among the magical items that\n                                Strange also wields. Strange has demonstrated proficiency with a variety of magically\n                                summoned weapons, including swords and axes, in addition to his magical abilities. He is\n                                also trained in judo and other martial arts styles. Before nerve damage rendered his\n                                hands ineffective, Strange was a skilled neurosurgeon."
    },
    {
        "image": "https://www.postoast.com/wp-content/uploads/2020/10/Real-life-munna-tripathi-Mirzapur.jpg",
        "title": "Munna Tripathi",
        "description": "Munna Tripathi urf Munna Bhaiya is famous charcter from Mirzapur Web\n                                Series. He is famous for his speaking and action."
    },
    {
        "image": "https://m.media-amazon.com/images/M/MV5BY2M3MTc0ODAtMDdjZi00ZjljLWIyNzUtOWY2ZjkxMjNhYzA0XkEyXkFqcGdeQXVyODAzNzAwOTU@._V1_.jpg",
        "title": "Harshad Mehta",
        "description": "Set in 1980s and '90s Bombay, it follows the\n                                life of Harshad Mehta, a stockbroker who\n                                took the stock market to dizzying heights\n                                and his catastrophic downfall."
    },
    {
        "image": "https://i1.sndcdn.com/artworks-000605125624-89fdgf-t500x500.jpg",
        "title": "Heisenberg",
        "description": "Walter Hartwell White Sr., also known by his\n                                drug-lord alias Heisenberg, is the main\n                                character of the American crime drama\n                                television series Breaking Bad, portrayed by\n                                Bryan Cranston."
    },
    {
        "image": "https://images2.alphacoders.com/509/thumb-1920-509099.jpg",
        "title": "Sherlock Holmes",
        "description": "Sherlock Holmes (/ˈʃɜːrlɒk ˈhoʊmz/) is a\n                                fictional detective created by British\n                                author Sir Arthur Conan Doyle. Referring to\n                                himself as a \"consulting detective\" in the\n                                stories, Holmes is known for his proficiency\n                                with observation, deduction, forensic\n                                science and logical reasoning that borders\n                                on the fantastic, which he employs when\n                                investigating cases for a wide variety of\n                                clients, including Scotland Yard."
    },
    {
        "image": "https://img-4.linternaute.com/Yb-sG6V4wi2FxpmAk4bmrUnROmQ=/300x/smart/5b794a03a1fe41dd8e3ff9d667b02ce6/ccmcms-linternaute/1560979.jpg",
        "title": "Damon Salvatore",
        "description": "He is a vampire in vampire diaries, who is\n                                part of a love triangle between his brother\n                                Stefan and a female vampire named Katherine\n                                Pierce whom they were both compelled to love\n                                when they were still human. A century after\n                                Damon and Stefan leave Mystic Falls, they\n                                both return and meet Elena Gilbert, a mortal\n                                who looks exactly like Katherine."
    },
    {
        "image": "https://resize.indiatvnews.com/en/resize/oldbucket/715_-/entertainmentbollywood/_Gangs_of_Wasse4390.jpg",
        "title": "Manoj Bajpayee",
        "description": "Manoj Bajpayee is a phenomenal actor but\n                            thanks to the wide acceptance of the OTT\n                            platforms, the Aligarh actor hit the\n                            mainstream spotlight with The Family\n                            Man, much like he did in his early days\n                            with Satya. While he has appeared in\n                            critically acclaimed films like Pinjar,\n                            Gali Guleiyan and Gangs of Wasseypur,\n                            the so-called commercial cinema has\n                            roped in his talent for films like\n                            Satyameva Jayate and Baaghi 2 among\n                            others. With The Family Man, Bajpayee\n                            led the cast from the front and since he\n                            was present in more or less all the\n                            story arcs, his ubiquitous presence made\n                            the show all the more delightful."
    },
    {
        "image": "https://i1.sndcdn.com/avatars-m5cIfzEBrTLJt0yg-LhRh5A-t500x500.jpg",
        "title": "Lucifer Morningstar",
        "description": "Lucifer Morningstar, created as Samael\n                            (Hebrew: סַמָּאֵל) and also known as the\n                            Lightbringer, is the titular protagonist of\n                            the TV Series, Lucifer. He is an Archangel\n                            and the twin brother of fellow Archangel,\n                            Michael. Following a failed rebellion\n                            against his Father, Lucifer was banished\n                            from Heaven and forced to oversee the\n                            torture of damned Human souls for eons as\n                            the Ruler of Hell. During his time as the\n                            King of Hell, Lucifer tempted Eve in the\n                            Garden of Eden, leading to Eve and her\n                            husband Adam being banished to live on Earth\n                            for the rest of their lives. After some\n                            visits to Earth, He would reunite with his\n                            old friend, Lilith in 1946 to help her find\n                            her ring. Lucifer was ultimately gifted the\n                            ring, along with Lilith's Immortality.\n                            Widely known as the Devil or Satan by\n                            Humans, Lucifer is blamed for the sins of\n                            mankind."
    },
    {
        "image": "https://i.pinimg.com/736x/72/69/f7/7269f76547cdb4634e307f7280b90e42.jpg",
        "title": "Frozen Elsa",
        "description": "Queen Elsa (also known as The Snow Queen) is\n                            the deuteragonist of Disney's 2013 animated\n                            feature film Frozen and protagonist of\n                            Frozen II. She is the older sister of\n                            Princess (later Queen) Anna and was next in\n                            line for Arendelle's throne, until her\n                            powers over ice and snow led her to become\n                            the famous Snow Queen."
    },
    {
        "image": "https://user-images.githubusercontent.com/63231765/194724338-6151ac9a-a6e3-452e-b5d1-998513dda9de.jpg",
        "title": "Moiraine",
        "description": "Moiraine is notable as a channeler in several ways aside from being born with the ability. Firstly, she is what once was considered strong in the One Power for an Aes Sedai. Among those in the White Tower before the White Tower Schism, only three other active Aes Sedai equaled her in strength. Those women were Siuan Sanche, who was Amyrlin Seat, Elaida do Avriny a'Roihan, advisor to Morgase the Queen of Andor."
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Walter_White_S5B.png/220px-Walter_White_S5B.png",
        "title": "Walter White",
        "description": "Walter was a skilled chemist and co-founder\n                            of a technology firm before he accepted a\n                            buy-out from his partners. Walt became a\n                            high-school chemistry teacher in\n                            Albuquerque, and barely making ends meet\n                            with his family with wife Skyler (Anna Gunn)\n                            and son Walt Jr. (RJ Mitte). At the start of\n                            the series, the day after his 50th birthday,\n                            Walt is diagnosed with Stage III lung\n                            cancer."
    },
    {
        "image": "./assets/img/maara.jpeg",
        "title": "Nedumaaran Rajangam a.k.a MAARA⚡",
        "description": "Maara is a Marxist: He\n                            questioned the existing social disorder,\n                            where the Rich only enjoys the luxury of\n                            Flying. Why not a common man fly- the\n                            thought process comes to him from the class\n                            consciousness. When he can't fly with the\n                            money he had to attend his father's funeral.\n                            Maara's dream is to make the common man fly\n                            and break the existing Capitalist model of\n                            furthering the Rich man's interest"
    },
    {
        "image": "./assets/img/mrhan.jpeg",
        "title": "Kim Seon-ho",
        "description": "Kim Seon-ho is a South Korean actor\n                            Kim Seon-ho is a South Korean actor. He\n                            began his career on stage and appeared in\n                            numerous plays before making his screen\n                            debut in 2017 with Good Manager. He rose to\n                            prominence with the television series\n                            Start-Up and gained more recognition for his\n                            main role in Hometown Cha-Cha-Cha, which\n                            aired on tvN and Netflix."
    },
    {
        "image": "./assets/img/Nam Joo-hyuk.jpeg",
        "title": "Nam Joo-hyuk",
        "description": "Nam Joo-hyuk is a South Korean model and\n                            actor.\n                            He began his career as a model, and appeared\n                            in several music videos before making his\n                            screen debut in 2014 with The Idle Mermaid."
    },
    {
        "image": "./assets/img/klaus-mikaelson.jpg",
        "title": "Niklaus Mikaelson",
        "description": "Niklaus Mikaelson is a lead character in the\n                            famous TV shows The Vampire Diaries and The\n                            Originals. He is an Original Vampire and an\n                            Original Hybrid (Vampire + Werewolf). Klaus\n                            is known as one of the most dreaded and\n                            merciless Villain of the series. Klaus first\n                            appeared in the second season of The Vampire\n                            Diaries and continued till the fourth season\n                            of the series, where he played an antagonist\n                            role and later got himself a show of his own\n                            called The Originals."
    },
    {
        "image": "https://pbs.twimg.com/profile_images/1286660994782179328/Ehh8f9ml_400x400.jpg",
        "title": "Jethalal Champaklal Gada",
        "description": "Dilip Joshi started his acting career in\n                            1989, playing the character of Ramu in the\n                            film Maine Pyar Kiya. Since then, he has\n                            appeared in several Gujarati dramas, one of\n                            them being Bapu Tame Kamaal Kari with Sumeet\n                            Raghavan and Amit Mistry, the trio known for\n                            their television show Shubh Mangal Savadhan.\n                            Joshi starred in the show Yeh Duniya Hai\n                            Rangeen and Kya Baat Hai in which he played\n                            a South Indian. He also appeared in films\n                            such as Phir Bhi Dil Hai Hindustani and Hum\n                            Aapke Hain Koun..!"
    },
    {
        "image": "https://superstarsbio.com/wp-content/uploads/2018/08/Amit_Sadh.jpg",
        "title": "*** Amit Sadh ***",
        "description": "Amit Sadh-starrer Jeet Ki Zid is based on\n                            the real-life story of Kargil war hero Major\n                            Deep Singh Senger, who was left\n                            wheelchair-bound after sustaining injuries\n                            during a mission, only to rise like a\n                            Phoenix"
    },
    {
        "image": "https://media.glamour.com/photos/5fab426f655313e3e2d3d72a/1:1/w_2400,h_2400,c_limit/EIP_101_Unit_00278R.jpg ",
        "title": "Emily Cooper",
        "description": "Emily Cooper a fictional character played by Lily Collins in the sereis\n                            Emily In Paris .\n                            Cultures clash as Emily adjusts to the challenges of life in Paris while juggling her\n                            career, new friendships, and active love life.\n                            Emily stand outs in Paris and makes her way out through every challenges amidst so many\n                            differences."
    },
    {
        "image": "./assets/img/Bae Suzy.jpeg",
        "title": "Bae Suzy",
        "description": "She made her debut as an actress with television series Dream High (2011)\n                            and has gone on to appear in series such as Gu Family Book (2013), Uncontrollably Fond\n                            (2016), While You Were Sleeping (2017), Vagabond (2019), Start-Up (2020) and Anna (2022)."
    },
    {
        "image": "https://images.immediate.co.uk/production/volatile/sites/3/2022/08/Matt-Smith-Prince-Daemon-House-of-the-Dragon-28691c5.jpg",
        "title": "Daemon Targaryen",
        "description": "Prince Daemon Targaryen was a member of House Targaryen, being a younger son of Prince\n                            Baelon Targaryen and a brother of King Viserys I Targaryen. Daemon was the second husband of\n                            Rhaenyra Targaryen, Princess of Dragonstone, following Ser Laenor Velaryon.\n\n                            Daemon was the most experienced warrior of his time and wielded the Valyrian steel blade\n                            Dark Sister. A dragonrider whose dragon was Caraxes, Daemon declared himself the King of the\n                            Stepstones and the Narrow Sea. During the Dance of the Dragons, he was a prominent supporter\n                            of his wife, Rhaenyra."
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/6/65/20220226_Ahn_Hyo-seop_%EC%95%88%ED%9A%A8%EC%84%AD_Kim_Se-jeong_%EA%B9%80%EC%84%B8%EC%A0%95_for_Marie_Claire_Korea_%281%29_%28cropped%29.jpg",
        "title": "Kim Sejeong",
        "description": "Kim Se-jeong, known mononymously as Sejeong, is a South Korean singer and\n                            actress. She finished second in Mnet's girl group survival show Produce 101, becoming a\n                            member of the project girl group I.O.I. She was also a member of Jellyfish Entertainment's\n                            girl group Gugudan."
    },
    {
        "image": " https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F04%2F15%2FBetter-Call-Saul-S6.jpg&h=480&q=60  ",
        "title": "Saul Goodman",
        "description": "James Morgan \"Jimmy\" McGill, better known by his business name Saul\n                            Goodman and also later by the assumed identity of Gene Takavic, is the titular protagonist\n                            of the series Better Call Saul, a spinoff of Breaking Bad in which he is also a main\n                            character. He is primarily portrayed by Bob Odenkirk, and was created by Vince Gilligan and\n                            Peter Gould.[3] The character is an Albuquerque-based lawyer who embraces his tendencies as\n                            a former scam artist and begins to represent criminals while he himself becomes increasingly\n                            involved in the city's criminal underworld. Saul is an Irish American but pretends to be\n                            Jewish to attract clients. His business name, \"Saul Goodman,\" is a play on the phrase \"it's\n                            all good, man."
    },
    {
        "image": "assets/img/vishal.jpeg",
        "title": "Vishal Vashishtha",
        "description": "Vishal Vashishtha is a famous charcter from series GHAR WAPSI whole story revolves around the life of Shekhar, who is out of work, changes forever as he moves back to his hometown and finds a road to self-discovery."
    },
    {
        "image": "assets/img/portfolio/HD-wallpaper-netflix-the-sandman-tom-sturridge-thumbnail.jpg",
        "title": "LORD MORPHIUS",
        "description": "Lord Morphius (sandman)- The lord of dreams.He got trapped by human for\n                            over a century ,his equipments were taken from him but when he got freed he took revenge and\n                            begin his journey for finding his tools.There are lot hurdles in his way but he overcome all\n                            of them and establish his reign again."
    },
    {
        "image": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/One-Piece-Luffy.jpg?q=50&fit=contain&w=750&h=&dpr=1.5 ",
        "title": "Monkey.D.Luffy",
        "description": "Monkey d Luffy is one of the only few pirates who are considered to not be\n                            a threat to the locals but to other pirates and the marines who consider him and his crew a\n                            world class threat. He is a magnet to people who look interesting or wierd and also his\n                            incredible set of battle skills and natural instinct is toppled by his stupidity.\n                            But despite his shortcomings he stays true to his comrades (nakama) without any care for his\n                            own health or safety which was commended by both friend and for alike."
    },
    {
        "image": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Pankaj_Tripathi_World_Premiere_Newton_Zoopalast_Berlinale_2017_06.jpg/640px-Pankaj_Tripathi_World_Premiere_Newton_Zoopalast_Berlinale_2017_06.jpg ",
        "title": "pankaj Tripathi",
        "description": "Pankaj Tripathi is one of the only few actors who are considered to not be\n                            He debuted in 2004 with a minor role in Run and Omkara, and has since worked in more than 520 films and 65 television shows.[3] Tripathi is the recipient of several awards including a National Film Award, a Filmfare Award, a Screen Award and an IIFA Award."
    },
    {
        "image": "https://image.tmdb.org/t/p/w500/vnHQQFzTjJ0sv14DGMIoKa3qTxN.jpg",
        "title": "Ajay Devgn",
        "description": "Ajay Devgn is an Indian actor, film director and producer who works in Hindi cinema.\n                            Devgn has appeared in over a hundred films and has won numerous accolades, including four National Film \n                            Awards and four Filmfare Awards. In 2016, he was honoured by the Government of India with the Padma Shri,\n                            the fourth-highest civilian honour of the country."
    },
    {
        "image": "https://images6.alphacoders.com/126/thumbbig-1262865.webp",
        "title": "She Hulk",
        "description": "She-Hulk (Jennifer Walters) is a fictional character appearing in American comic books published by Marvel Comics. Created by writer Stan Lee and artist John Buscema. She-Hulk has been a member of the Avengers, the Fantastic Four, Heroes for Hire, the Defenders, Fantastic Force and S.H.I.E.L.D. As a highly skilled lawyer who became a superhero by accident, she frequently leverages her legal and personal experience to serve as legal counsel to various superheroes and other metahumans."
    },
    {
        "image": "https://images.alphacoders.com/111/1115467.jpg",
        "title": "Jonas kahn",
        "description": "Dark is a German science fiction thriller television series co-created by Baran bo Odar and Jantje Friese.[5][6][7] It ran for three seasons from 2017 to 2020. The story follows characters from the fictional village of Winden, Germany, as they pursue the truth in the aftermath of a child's disappearance. They follow connections between four estranged families to unravel a sinister time travel conspiracy which spans several generations. The series explores the existential implications of time and its effect on human nature. It features an ensemble cast"
    },
    {

        "image":"https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FCharlie_Cox&psig=AOvVaw0j36-JBWBxmraJTSOcXuu-&ust=1666103166208000&source=images&cd=vfe&ved=0CA0QjRxqFwoTCNidxY685_oCFQAAAAAdAAAAABAE",
        "title":"Charlie Cox",
        "description": "Charlie Thomas Cox (born 15 December 1982) is an English actor. He is best known for portraying Matt Murdock / Daredevil in several projects of the Marvel Cinematic Universe franchise, including lead roles in the television series Daredevil (2015–2018), The Defenders (2017), and the upcoming Daredevil: Born Again."
     },
     {
        "image": "https://static1.cbrimages.com/wordpress/wp-content/uploads/2022/04/Shanks.jpg",
        "title": "Shanks",
        "description": "Shanks Red-Haired Shanks is a legendary and powerful pirate in the Grand Line, being the captain of the Red Haired Pirate Crew and one of the Four Emperors in the second half of the grand line."
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOx9iOQDGngTtWqnTkMIvOyqIHClRIaN-zog&usqp=CAU",
        "title": "Agastya Rao",
        "description": "For Sidharth Shukla, it was the character of Agastya that got him on board Broken But Beautiful 3. In an exclusive chat with indianexpress.com, the actor shared that he could relate to his role, and since the show has been made in a very 'realistic way', he picked it up for his digital debut."
    },
    {
        "image": "https://github.com/amit-c-ai/Naruto-Shippuden/blob/main/Images/naruto.png?raw=true",
        "title": "Naruto Uzumaki",
        "description": "Naruto Uzumaki is the titular protagonist of the manga Naruto, created by Masashi Kishimoto. As the series progresses, he is a young ninja from the fictional village of Konohagakure (Hidden Leaf Village). The villagers ridicule and ostracize Naruto on account of the Nine-Tailed Demon Fox—a malevolent creature that attacked Konohagakure—that was sealed away in Naruto's body. Despite this, he aspires to become his village's leader, the Hokage, in order to receive their approval."

    }
];
