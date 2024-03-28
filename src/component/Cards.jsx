import React from 'react'
import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className='md:flex md:justify-center md:gap-48    '>
            <Card className="mt-6 w-96  ">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2 ">
                  Statewise Daily Data
                </Typography>
                <Typography>
                Stay informed about the latest COVID-19 statistics in your area. Monitor the daily trends, track the spread, and make informed decisions to protect yourself and your community. Knowledge is power, and staying updated empowers us to navigate through these uncertain times with resilience and vigilance.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to='/daily'>
                    <Button className='md:mt-7 mt-[14vh] '>Daily Data</Button>
                </Link>
              </CardFooter>
            </Card>

            <Card className="mt-10 w-96">
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  Statewise Overall Data
                </Typography>
                <Typography>
                Stay informed with key COVID-19 statistics across different states. Keep track of the number of individuals tested, recovered, and sadly, those who have succumbed to the virus. Understanding these metrics provides valuable insights into the overall impact of COVID-19 on our communities and helps in making informed decisions to combat its spread effectively.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0 mt-[-1vh]">
                <Link to='/overall'>
                    <Button>Overall data</Button>
                </Link>
              </CardFooter>
            </Card>
            </div>
  )
}

export default Cards