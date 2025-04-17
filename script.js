// Sorular dizisi
const questions = [
    {
        question: "Türkiye'nin en büyük gölü hangisidir?",
        options: ["Van Gölü", "Tuz Gölü", "Beyşehir Gölü", "Çıldır Gölü"],
        correctAnswer: "Van Gölü",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Dünyanın en yüksek dağı hangisidir?",
        options: ["Everest", "K2", "Mont Blanc", "Elbrus"],
        correctAnswer: "Everest",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Hangi gezegen 'Kızıl Gezegen' olarak bilinir?",
        options: ["Mars", "Venüs", "Jüpiter", "Uranüs"],
        correctAnswer: "Mars",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Dünyanın en uzun nehri hangisidir?",
        options: ["Nil", "Amazon", "Yangtze", "Ganj"],
        correctAnswer: "Nil",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Hangi ülkenin bayrağında yıldız ve hilal bulunur?",
        options: ["Türkiye", "Mısır", "Tunus", "Arnavutluk"],
        correctAnswer: "Türkiye",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Türkiye'nin başkenti hangi şehirdir?",
        options: ["İstanbul", "Ankara", "İzmir", "Bursa"],
        correctAnswer: "Ankara",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "En büyük okyanus hangisidir?",
        options: ["Atlas Okyanusu", "Hint Okyanusu", "Pasifik Okyanusu", "Arktik Okyanusu"],
        correctAnswer: "Pasifik Okyanusu",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Hangi ülke 'Geyik Ülkesi' olarak bilinir?",
        options: ["Kanada", "Norveç", "Finlandiya", "İsveç"],
        correctAnswer: "Kanada",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Dünyadaki en büyük çöl hangisidir?",
        options: ["Sahra Çölü", "Gobi Çölü", "Atacama Çölü", "Kalahari Çölü"],
        correctAnswer: "Sahra Çölü",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Hangi ülke 'Kahve Ülkesi' olarak bilinir?",
        options: ["Kolombiya", "Brezilya", "Endonezya", "Kenya"],
        correctAnswer: "Kolombiya",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "İstanbul Boğazı hangi denizleri birbirine bağlar?",
        options: ["Ege Denizi ve Karadeniz", "Akdeniz ve Karadeniz", "Marmara Denizi ve Karadeniz", "Ege Denizi ve Akdeniz"],
        correctAnswer: "Marmara Denizi ve Karadeniz",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Hangi hayvan en hızlı koşandır?",
        options: ["Çita", "Aslan", "Zürafa", "At"],
        correctAnswer: "Çita",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Dünyanın en büyük adası hangisidir?",
        options: ["Grönland", "Avustralya", "Yeni Gine", "Borneo"],
        correctAnswer: "Grönland",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Birleşmiş Milletler'in kurulduğu şehir hangisidir?",
        options: ["New York", "Paris", "Cenevre", "Viyana"],
        correctAnswer: "New York",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    },
    {
        question: "Türkiye'nin en uzun nehri hangisidir?",
        options: ["Fırat Nehri", "Dicle Nehri", "Kızılırmak", "Sakarya Nehri"],
        correctAnswer: "Kızılırmak",
        correctLinks: [
            "https://youtu.be/PnFrMiCSAmg?si=gZ6agKTpqF76xlxw", 
            "https://youtu.be/yUWRu2yQ4Yc?si=rbWr4ZHtJfDRYZ8u", 
            "https://youtu.be/uYpl-ZkEPXQ?si=OIxgJvY9PX7EOdPZ", 
            "https://youtu.be/wmQakMejZIs?si=gCzGDgPwdSCbtqIN", 
            "https://youtu.be/fgtni2f30no?si=ju6i7rJ6cHBsPBdf", 
            "https://youtu.be/0HA9AGaiLLk?si=o7Jv-FGELjsdouOQ", 
            "https://youtu.be/FiNDqTHtAyQ?si=_kgrK_ST9N-oIJEY", 
            "https://youtu.be/eaIh1YlkFpI?si=eMt0QIqony-7TDZ_", 
            "https://youtu.be/sMVanLCCeOE?si=jASRdHtqsgO94Whq", 
            "https://youtu.be/WitSKJCIEso?si=H00MLpTBJjDd6ehc", 
            "https://youtu.be/AfpBmTuifN8?si=k9LDZptijMWwBpDn", 
            "https://youtu.be/tdgUwDfLJOU?si=DvAfDeNrjb03tPSs", 
            "https://youtu.be/ik1e6f80P14?si=at_PBIH1eu8PmeaF", 
            "https://youtu.be/7ylTzg7P9BA?si=dNU8yUawgtiDrtt_", 
            "https://youtu.be/9WWYtFjtWO0?si=XE8pOldSppNkgFEi"
        ]
    }
];

// Soruyu seçme ve sessionStorage'a kaydetme fonksiyonu
function getRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
}

// Sayfa yüklenirken soru kontrolü
let currentQuestion;
if(sessionStorage.getItem("question")) {
    // Eğer daha önce bir soru seçildiyse, o soruyu al
    currentQuestion = JSON.parse(sessionStorage.getItem("question"));
} else {
    // Eğer ilk kez açılıyorsa rastgele bir soru seç
    currentQuestion = getRandomQuestion();
    // Rastgele seçilen soruyu sessionStorage'a kaydet
    sessionStorage.setItem("question", JSON.stringify(currentQuestion));
}

// Soruyu ve seçenekleri sayfada görüntüleme
document.getElementById("question").textContent = currentQuestion.question;
const optionButtons = document.querySelectorAll(".option-btn");

optionButtons.forEach((button, index) => {
    button.textContent = currentQuestion.options[index];
});

// Cevap kontrolü
function checkAnswer(button) {
    // Tüm butonları disable et
    const buttons = document.querySelectorAll(".option-btn");
    buttons.forEach(b => b.disabled = true);

    if (button.textContent === currentQuestion.correctAnswer) {
        button.classList.add("correct");
        document.getElementById("result").textContent = "Tebrikler, doğru cevap!";
        
        // Rastgele link seçme ve yönlendirme
        const randomLink = getRandomLink(currentQuestion.correctLinks);
        window.location.href = randomLink;
    } else {
        button.classList.add("wrong");
        document.getElementById("result").textContent = "Tekrar deneyin!";
    }
}

// Rastgele link seçme fonksiyonu
function getRandomLink(links) {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}
