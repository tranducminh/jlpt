import React from 'react';
import Menu from '../../Menu/Menu';
import Part from './Part/Part';
import styles from './ResultDetail.scss';

class ResultDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            resultDetail: this.props.resultDetail,
            part1: ["kanjiSkillMondai", "vocabularySkillMondai", "grammarSkillMondai"],
            part2: ["readingSkillMondai"],
            part3: ["listeningSkillMondai"],
            displayPart1: true,
            displayPart2: false,
            displayPart3: false,
            titlePart1: "文字 。漢字 。 文法",
            titlePart2: "読解",
            titlePart3: "聴解",
        }
    }

    displayPart = (part) => {
        switch (part) {
            case 1:
                this.setState({
                    displayPart1: true,
                    displayPart2: false,
                    displayPart3: false
                })
                break;
            case 2:
                this.setState({
                    displayPart1: false,
                    displayPart2: true,
                    displayPart3: false
                })
                break;
            case 3:
                this.setState({
                    displayPart1: false,
                    displayPart2: false,
                    displayPart3: true
                })
                break;
            default: break;
        }
    }

    render() {
        return (
            <React.Fragment>
                <Menu />
                <div className={styles.container}>
                    {this.state.displayPart1 ?
                        <Part resultDetail={this.props.resultDetail} part={this.state.part1} displayPart={this.displayPart} examInfo={this.props.examInfo} titlePart={this.state.titlePart1}/> : null
                    }
                    {this.state.displayPart2 ?
                        <Part resultDetail={this.props.resultDetail} part={this.state.part2} displayPart={this.displayPart} examInfo={this.props.examInfo} titlePart={this.state.titlePart2}/> : null
                    }
                    {this.state.displayPart3 ?
                        <Part resultDetail={this.props.resultDetail} part={this.state.part3} displayPart={this.displayPart} examInfo={this.props.examInfo} titlePart={this.state.titlePart3}/> : null
                    }
                </div>
            </React.Fragment>
        )
    }
}

export default ResultDetail;