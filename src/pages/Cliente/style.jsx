import styled from 'styled-components/native'


// export const ImageBackground = styled.ImageBackground`
// flex:1;
// align-items: center;
// justify-content: center;
// width: 100%;
// height: 100%;
// `;

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    color: black;
    `;


export const Title = styled.View`
justify-content: center;
    align-items: center;
    padding: 12px;
    font-size: 20px;
`;

export const Label = styled.Text`
    justify-content: center;
    align-items: center;
    padding: 12px;
    font-size: 20px;
`;
export const Input = styled.TextInput`
    height: 40px;
    width: 300px;
    margin: 12px;
    border-width: 1px;
    padding: 10px;
    border-color: red;
`;
export const ViewButton = styled.View`
    width: 300px;
    display: flex;
    flex-direction: row;
    justify-content: space-between; 
    margin-top: 50px;
    padding: 20px;
    align-items: center;
    padding: 5px;
`;
