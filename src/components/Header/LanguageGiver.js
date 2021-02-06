import React, {useContext} from 'react';
import LangContext from "../../context/LangContext";
import styled from "styled-components";
import {getDefaultLanguage, setLanguage} from "react-switch-lang";

const LanguageGiver = () => {
    const { switchLang, lang } = useContext(LangContext);

    const changeLanguageHandler = (lang) => {
        console.log(lang);
        switchLang(lang);
    }

    return (
        <SwitcherContainer>
            <LanguageSwitcherSelector
                lang={lang}
                handleChangeLanguage={changeLanguageHandler}
            />
        </SwitcherContainer>
    )
}

export default LanguageGiver;

const languages = [
    { code: 'en', name: 'English'},
    { code: 'deu', name: 'Deutsch'}
]

class LanguageSwitcherSelector extends React.Component {
    onChange = e => {
        this.props.handleChangeLanguage(e.target.className);
    }

    render() {
        const options = languages.map(language => {
            if (language.code !== this.props.lang) {
                return <li onClick={this.onChange}>
                    <div value={language.code} className={language.code}></div>
                </li>
            }
        });

        return (
            <div className="lang">
                <div
                    className={this.props.lang}
                >
                </div>
                <ul class="dropdown">
                    {options}
                </ul>
            </div>
        )
    }
}

const SwitcherContainer = styled.footer`
  body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .lang {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 40px;

    .dropdown {
      position: relative;
      left: 0;
      display: none;
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }

  .lang:hover {
    .dropdown {
      display: flex;
      flex-direction: column;
      align-items: center;

      li {
        margin: 0;
        display: block;
        padding: 5px 0;

        div:hover {
          width: 45px;
          height: 45px;
        }
      }
    }
  }

  .en {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Ccircle style='fill:%23F0F0F0;' cx='256' cy='256' r='256'/%3E%3Cg%3E%3Cpath style='fill:%230052B4;' d='M52.92,100.142c-20.109,26.163-35.272,56.318-44.101,89.077h133.178L52.92,100.142z'/%3E%3Cpath style='fill:%230052B4;' d='M503.181,189.219c-8.829-32.758-23.993-62.913-44.101-89.076l-89.075,89.076H503.181z'/%3E%3Cpath style='fill:%230052B4;' d='M8.819,322.784c8.83,32.758,23.993,62.913,44.101,89.075l89.074-89.075L8.819,322.784L8.819,322.784 z'/%3E%3Cpath style='fill:%230052B4;' d='M411.858,52.921c-26.163-20.109-56.317-35.272-89.076-44.102v133.177L411.858,52.921z'/%3E%3Cpath style='fill:%230052B4;' d='M100.142,459.079c26.163,20.109,56.318,35.272,89.076,44.102V370.005L100.142,459.079z'/%3E%3Cpath style='fill:%230052B4;' d='M189.217,8.819c-32.758,8.83-62.913,23.993-89.075,44.101l89.075,89.075V8.819z'/%3E%3Cpath style='fill:%230052B4;' d='M322.783,503.181c32.758-8.83,62.913-23.993,89.075-44.101l-89.075-89.075V503.181z'/%3E%3Cpath style='fill:%230052B4;' d='M370.005,322.784l89.075,89.076c20.108-26.162,35.272-56.318,44.101-89.076H370.005z'/%3E%3C/g%3E%3Cg%3E%3Cpath style='fill:%23D80027;' d='M509.833,222.609h-220.44h-0.001V2.167C278.461,0.744,267.317,0,256,0 c-11.319,0-22.461,0.744-33.391,2.167v220.44v0.001H2.167C0.744,233.539,0,244.683,0,256c0,11.319,0.744,22.461,2.167,33.391 h220.44h0.001v220.442C233.539,511.256,244.681,512,256,512c11.317,0,22.461-0.743,33.391-2.167v-220.44v-0.001h220.442 C511.256,278.461,512,267.319,512,256C512,244.683,511.256,233.539,509.833,222.609z'/%3E%3Cpath style='fill:%23D80027;' d='M322.783,322.784L322.783,322.784L437.019,437.02c5.254-5.252,10.266-10.743,15.048-16.435 l-97.802-97.802h-31.482V322.784z'/%3E%3Cpath style='fill:%23D80027;' d='M189.217,322.784h-0.002L74.98,437.019c5.252,5.254,10.743,10.266,16.435,15.048l97.802-97.804 V322.784z'/%3E%3Cpath style='fill:%23D80027;' d='M189.217,189.219v-0.002L74.981,74.98c-5.254,5.252-10.266,10.743-15.048,16.435l97.803,97.803 H189.217z'/%3E%3Cpath style='fill:%23D80027;' d='M322.783,189.219L322.783,189.219L437.02,74.981c-5.252-5.254-10.743-10.266-16.435-15.047 l-97.802,97.803V189.219z'/%3E%3C/g%3E%3C/svg%3E%0A");
    width: 40px;
    height: 40px;
  }

  .rus {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Ccircle style='fill:%23F0F0F0;' cx='256' cy='256' r='256'/%3E%3Cpath style='fill:%230052B4;' d='M496.077,345.043C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923 C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043L256,367.304L496.077,345.043z'/%3E%3Cpath style='fill:%23D80027;' d='M256,512c110.071,0,203.906-69.472,240.077-166.957H15.923C52.094,442.528,145.929,512,256,512z'/%3E%3C/svg%3E%0A");
    width: 40px;
    height: 40px;
  }

  .deu {
    background-image: url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='iso-8859-1'%3F%3E%3Csvg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 512 512' style='enable-background:new 0 0 512 512;' xml:space='preserve'%3E%3Cpath style='fill:%23FFDA44;' d='M15.923,345.043C52.094,442.527,145.929,512,256,512s203.906-69.473,240.077-166.957L256,322.783 L15.923,345.043z'/%3E%3Cpath d='M256,0C145.929,0,52.094,69.472,15.923,166.957L256,189.217l240.077-22.261C459.906,69.472,366.071,0,256,0z'/%3E%3Cpath style='fill:%23D80027;' d='M15.923,166.957C5.633,194.69,0,224.686,0,256s5.633,61.31,15.923,89.043h480.155 C506.368,317.31,512,287.314,512,256s-5.632-61.31-15.923-89.043H15.923z'/%3E%3C/svg%3E%0A");
    width: 40px;
    height: 40px;
  }
`;

/*https://codepen.io/mewmix/pen/bGdNbbZ*/
