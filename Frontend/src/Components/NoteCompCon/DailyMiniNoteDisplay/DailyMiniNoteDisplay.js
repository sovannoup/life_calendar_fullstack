import {
    Container,
    Header,
    HeaderText,
    Body,
    ZoomIconContainer,
    Content,
    Image,
    SeeMore
} from "./DailyMiniNoteDisplayStyle"

// https://stackoverflow.com/questions/40255345/maximum-amount-of-characters-in-a-div-paragraph-tag-in-react

function stringWithlimit(string, limit){
    let subString = ''
    string.split(' ', limit).map((item) => {subString += item + ' ' })
    return subString
}

export default function DailyMiniNoteDisplay({ date, message, image }) {
    const isNoImg = image === null || image === undefined
    const messageLength = message.split(' ').length

    // console.log('Message', message, isMessageMoreThan25)
    return (
        <Container>
            <Header>
                <HeaderText>{date}</HeaderText>
                <ZoomIconContainer>
                    <svg width="11" height="12" viewBox="0 0 11 12" fill='black' xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.27778 11.5V10.2778H2.08389L4.83389 7.52778L3.97222 6.66611L1.22222 9.41611V7.22222H0V11.5H4.27778ZM7.02778 5.33389L9.77778 2.58389V4.77778H11V0.5H6.72222V1.72222H8.91611L6.16611 4.47222L7.02778 5.33389Z" />
                    </svg>
                </ZoomIconContainer>
            </Header>
            <Body>
                {
                    messageLength > 25 && !isNoImg ? 
                        (
                            <Content>
                                {
                                    stringWithlimit(message, 25) + '... '
                                }
                                <SeeMore>see more</SeeMore>
                            </Content>
                        ) :
                        (
                            <Content>
                                {
                                    messageLength > 130 ? stringWithlimit(message, 130) + '... ' : message
                                }
                                {
                                    messageLength > 130 ? <SeeMore>see more</SeeMore> : null
                                }
                            </Content>
                        )
                }
                {/* <Content>{message}</Content> */}
                {/* <Image src="image.jpeg" width="500" height="600"></Image> */}
                {isNoImg ? null : (
                    <Image>
                        <img src={image} alt="Trulli" height='280' margin-top='30px' />
                    </Image>
                )
                }


            </Body>
        </Container>
    )
}