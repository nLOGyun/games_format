import React, { Component } from "react";
import {Layout, Dropdown, Button} from "epm-ui-react";
import BoxMain from "./boxMain";

export default class boxGame extends Component{
    constructor(props) {
        super( props );
        this.state={
            lightStyle: 'dark',
        }
    }
    lightClick( item ){
        this.setState( { lightStyle: item.name } )
    }
    render() {
        const { lightStyle } = this.state;
        const dataSource = [{ name: 'dark', onClick: ( item ) => { this.lightClick( item ) } },
                            { name: 'light', onClick: ( item ) => { this.lightClick( item ) } }];
        let background = `${ lightStyle === 'dark' ? '#282c34' : '#FFFFFF' }`;
        let color = `${ lightStyle === 'dark' ? '#FFF': '#282c34' }`;

        return (
            <Layout>
                <Layout.Header
                    height= {80}
                    style={ { background: background, color: color, lineHeight: '80px', display: 'flex', justifyContent: 'center' }}
                >
                    <div style={{ width: '90%', textAlign: 'center' }} >BoxGame</div>
                    <div>
                        <Dropdown dataSource={ dataSource }>
                            <Dropdown.Trigger>
                                <Button>{lightStyle}</Button>
                            </Dropdown.Trigger>
                        </Dropdown>
                    </div>
                </Layout.Header>
                <Layout>
                    <Layout.Content style={ { background: background, textAlign: 'center' } }>
                        <div style={{ minHeight: '50px', color: color }}> box </div>
                        <div style={{ minHeight: '500px', color: color }}>
                            <BoxMain/>
                        </div>
                    </Layout.Content>
                </Layout>
                <Layout.Footer
                    style={ { padding: '20px', background: background, color: color, textAlign: 'center', lineHeight: '80px'  } }>
                    <span> welcome </span>
                </Layout.Footer>
            </Layout>
    );
    }
}