import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import './NewUpdates.css';
import update1 from '../../assets/update1.jpg';
import UpdateComponent from '../UpdateComponent/UpdateComponent';
import update2 from '../../assets/update2.jpg';
import update3 from '../../assets/update3.jpg';
import update4 from '../../assets/update4.jpg';
import update5 from '../../assets/update5.jpg';

export default function NewUpdates(props) {
    return (
        <Grid item lg={7} md={6} sm={12} xs={12}>
            <Paper
            sx={{
                padding: '24px',
                paddingBottom: '15px',
                borderRadius: '16px'
            }}
            className="Updates__paper"
            >
                <h2>New Updates</h2>

                <div className='updates__container'>
                    <UpdateComponent 
                    img={update1} 
                    title="Princial Solutions Consultant"
                    text="numquam quis quasi qui. Et nostrum voluptatem rerum consectetur assumenda."
                    timestamp="about 8 hours"
                    />

                    <UpdateComponent 
                    img={update2} 
                    title="Chief Accounts Designer"
                    text="Dolorem omnis quisquam sequi eligendi est sequi. Voluptatem qui nobis sint nostrum quia error cumque. Velit minima ullam voluptas deleniti. Nobis qui repellat commodi minima libero commodi quasi.
 
                    Ratione saepe quo est nam. Ab veritatis repellat maxime. Repellat magni ab quo officiis. Aut excepturi deserunt consequatur laborum molestiae voluptatem. Dolorem veritatis et quas ea eveniet. Impedit sit qui ipsam eum voluptas nobis.
                     
                    Ea repellat soluta reiciendis deleniti quia sit quidem cumque. Quam animi deleniti dolorum a saepe. Quibusdam sunt magni labore voluptatem voluptatem."
                    timestamp="about 2 hours"
                    />

                    <UpdateComponent 
                    img={update3} 
                    title="Corporate Applications Designer"
                    text="Optio ut fugit. Ex voluptates et sed nisi quia sapiente quo. Harum et laborum. Deleniti rerum voluptatem voluptatem error sunt quia quia. Magni nobis iure eos. Quae adipisci et magnam.
 
                    Non expedita hic et nesciunt. Sed recusandae reprehenderit rem enim et. Voluptatem consectetur debitis possimus dolore suscipit perspiciatis. Corporis omnis consequatur cum repudiandae qui qui accusamus et et. Quia quia ad minus exercitationem consequatur ut doloremque in.
                     
                    Nam placeat consequatur veniam. Excepturi voluptatem dolore dolores. Ut et hic ullam odit eum veritatis ut asperiores quos."
                    timestamp="about 7 hours"
                    />

                <UpdateComponent 
                    img={update4} 
                    title="Product Division Engineer"
                    text="Ducimus recusandae eum fugiat consequatur pariatur. Laudantium deleniti sint odit laboriosam veritatis ullam corporis voluptatum. Deleniti voluptatem consequatur aspernatur in possimus qui.
 
                    Magni nostrum quisquam rerum. Sit id nemo ut nihil autem reiciendis consequatur. Iure officiis itaque velit sint aperiam cupiditate vel vero et. Distinctio molestiae ut. Dolorem facilis voluptatum dolorem voluptates rerum eaque id sit reprehenderit. Itaque fugiat fugiat voluptatibus maxime ad eius iure possimus explicabo.
                     
                    Est temporibus assumenda a. Necessitatibus necessitatibus autem perspiciatis non ipsam quis quasi. Non mollitia ratione quos modi consequatur. Nesciunt et suscipit ut assumenda est consequatur. Esse vel tempora quasi nihil vitae aliquid qui. Placeat reiciendis voluptatibus repudiandae excepturi qui aspernatur quia consequuntur."
                    timestamp="about 10 hours"
                    />

                    <UpdateComponent 
                    img={update5} 
                    title="Future Operations Architect"
                    text="Sunt sint quo voluptatem exercitationem eum ea est dicta. Accusamus iusto omnis excepturi ratione. Quas occaecati eos.
 
                    Repellendus dicta et. Eaque ut quia consectetur quia. Vel molestias vel.
                     
                    Fuga aliquam blanditiis in beatae omnis esse minus rerum. Dolorem et voluptas. Sit consequatur et qui dolore nihil et debitis ab nostrum. Sunt quis fuga."
                    timestamp="about 22 hours"
                    />
                </div>

                <div className='seeAllUpdates'>
                    <Button 
                    variant='text' 
                    color='inherit' 
                    sx={{
                        padding: '4px 5px',
                        borderRadius: '8px',
                    }}
                    endIcon={<ArrowForwardIosIcon />}>
                        View All   
                    </Button>
                </div>
            </Paper>
        </Grid>
    );
}