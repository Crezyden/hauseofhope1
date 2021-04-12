import ContentHeaderLinks from '../../components/ContentHeaderLinks';
import styles from './hope21.module.css';
const Hope21 = () => {
    return (
        <>
            <section className="content-header">
                <div className="flex full-block">
                    <img src="https://houseoflv.herokuapp.com/static/img/hope21/afterbutton.png" alt="" />
                </div>
                <ContentHeaderLinks />
            </section>
            <h1 className="center">KAS UN KĀPĒC?</h1>
            <section className="flex block textcontent-right">
                <img src="https://houseoflv.herokuapp.com/static/img/hope21/1.png" alt="" />
                <p>HOPE21 IR STIPENDIJU PROGRAMMA NELABVĒLĪGĀ SITUĀCIJĀ ESOŠIEM JAUNIEŠIEM VECUMĀ NO 15 LĪDZ 21 GADIEM.<br />
                MŪSU MĒRĶIS IR ATRAST MOTIVĀCIJU JAUNOS CILVĒKOS PABEIGT SKOLU, VEIDOJOT RAKSTURU UN ESOT NOZĪMĪGAI SABIEDRĪBAS DAĻAI. JAUNIEŠI SAŅEM IKMĒNEŠA STIPENDIJU (20-50 EUR).
                JAUNIEŠUS APSEKO KĀDS NO JAUNIEŠU DARBINIEKIEM, VIŅI PIEDALĀS JAUNIEŠU CENTRA TIKŠANĀS, BET GALVENAIS – VIŅI IR IZPALĪDZĪGI UN UZŅEMAS ATBILDĪBU JAUNIEŠU CENTRA DARBĪBĀ.</p>
            </section>
            <h1 className="center">MŪSU PIEEJA: RPA</h1>
            <section className="flex block textcontent-left">
                <p>MĒS VEIDOJAM RAKSTURU, AKTĪVI PIEDALOTIES UN UZTUROT POZITĪVAS ATTIECĪBAS.</p>
                <img src="https://houseoflv.herokuapp.com/static/img/hope21/2.png" alt="" />
            </section>
            <h1 className="center">VĒSTURE</h1>
            <section className="flex block textcontent-right">
                <img src="https://houseoflv.herokuapp.com/static/img/hope21/3.png" alt="" />
                <p>HÅP FOR ALLE UZSĀKA STIPENDIJU PROGRAMMU BALTIJAS VALSTĪS 2012.GADA JANVĀRĪ. 2014.GADA ZIEMĀ TIKA NOLEMTS STIPENDIJU PROGRAMMU ATTĪSTĪT TĀLĀK, VEIDOJOT DAUDZPUSĪGĀKU PROGRAMMU, KURĀ JAUNIEŠIEM BŪTU VAIRĀK JĀIESAISTĀS UN JĀUZŅEMAS ATBILDĪBA. ŠĀDĀ VEIDĀ DZIMA HOPE21 PROGRAMMA. 2014.GADĀ SEŠI NO HOUSE OF HOPE JAUNIEŠIEM PIRMO REIZI KĻUVA PAR STIPENDIJAS LAUREĀTIEM. 2015.GADA FEBRUĀRĪ, PATEICOTIES HÅP FOR ALLE, TIKA PIEŠĶIRTAS VĒL 10 STIPENDIJAS HOUSE OF HOPE JAUNIEŠIEM. ŠOBRĪD LATVIJĀ IR 24 JAUNI CILVĒKI, KURIEM IR PIEŠĶIRTA ŠĪ STIPENDIJA. ARĪ TALLINĀ, IGAUNIJĀ ŠOBRĪD IR 14 HOPE21 STIPENDIĀTU.</p>
            </section>
            <h1 className="center">PARTNERS</h1>
            <section className="flex block textcontent-left">
                <p>LAI IZSTRĀDĀTU HOPE21 PROGRAMMU, MĒS ESAM ŅĒMUŠI LABĀKO NO PIRMATNĒJĀS PARTNERORGANIZĀCIJAS HAAP FOR ALLE STIPENDIJU PROGRAMMAS UN IEDVESMOJUŠIES NO TĀDIEM CITIEM AVOTIEM KĀ AMERIKAS SKOLU PROGRAMMAS “KIPP”, SELIGMAN & PETERSON (RAKSTURA STIPRĀS PUSES UN VĒRTĪBAS), KĀ ARĪ NESENAS IZPĒTES IZGLĪTĪBAS JOMĀ (TAJĀ SKAITĀ DĀNIJAS “CLEARINGHOUSE”).</p>
                <img src="https://houseoflv.herokuapp.com/static/img/hope21/4.png" alt="" />
            </section>
        </>
    );
}

export default Hope21;