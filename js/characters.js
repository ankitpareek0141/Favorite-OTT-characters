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
        "image": "https://i.insider.com/5cb3c8e96afbee373d4f2b62?width=700",
        "title": "John Snow",
        "description": "Jon Snow is a fictional character in the A\n                                Song of Ice and Fire series of fantasy\n                                novels by American author George R. R.\n                                Martin, and its television adaptation Game\n                                of Thrones, in which he was portrayed by\n                                English actor Kit Harington. In the novels,\n                                he is a prominent point of view character."
    },
    {
        "image": "https://static1.srcdn.com/wordpress/wp-content/uploads/2022/07/Sansa-Starks-10-Best-Decisions.jpg",
        "title": "Sansa Stark",
        "description": "Sansa Stark is a fictional character in the\n                                A Song of Ice and Fire series of epic\n                                fantasy novels by American author George R.\n                                R. Martin, and its television adaptation\n                                Game of Thrones, where she was portrayed by\n                                English actress Sophie Turner."
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
        "image": "https://images.dailyhive.com/20221014095326/Collage-Maker-14-Oct-2022-10.52-AM.jpg",
        "title": "Hagrid",
        "description": "Rubeus Hagrid is a fictional character in J. K. Rowling's Harry Potter series. He is a half-giant and the gamekeeper and groundskeeper of Hogwarts School of Witchcraft and Wizardry. He is also a close friend of Harry Potter's parents, James and Lily Potter, and Harry's godfather. Hagrid is portrayed by Robbie Coltrane in the film series."

    },
    {
        "image": "data:image/jpeg;base64,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",
        "title": "Moon Knight",
        "description": "Marc Spector, better known as the vigilante Moon Knight, was once a mercenary left for dead in the desert, where he was revived by the Moon god Khonshu. Appointed as Khonshu's fist and high priest, Moon Knight enacts justice to protect those who travel at night. Marc also has dissociative identity disorder, some of his alters being millionaire Steven Grant and cab driver Jake Lockley."

    },
    {
        "image": "data:image/jpeg;base64,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",
        "title": "Ms. Marvel",
        "description": "Kamala Khan, a.k.a. Ms. Marvel, is a Muslim Pakistani-American teenager from New Jersey.[22] She possess latent Inhuman lineage activated by the Terrigen Bomb. When she was exposed to the Terrigen Mist she became a polymorph with the ability to stretch her body in almost any way imaginable.[23] Kamala was a huge fan of superheroes, especially Carol Danvers, the former Ms. Marvel. She went on to become the newest holder of the Ms. Marvel identity.[24]"
    },
    {
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg2i9npm2zLIzYovPvk-w01y-v8N85n5oFRsE35wwvLfovhWFc467mxgw1B-r278uepJw&usqp=CAU",
        "title": "Mobius",
        "description": "Mobius M. Mobius is a former agent of the Time Variance Authority who specialized in the investigation and analysis of particularly dangerous time criminals. He recruited a variant of Loki to aid in the investigation of fellow Loki variant Sylvie Laufeydottir, who had been attacking the TVA. "

    },
];
