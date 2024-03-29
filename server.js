server,js
const app = require('./src/config/express');

const hostname = 'localhost';
const port = 8000; // Porta para API

app.listen(port, hostname, () => {
	console.log(`Server running at http://${hostname}:${port}/`);
});

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/products/2')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/products?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))


			fetch('https://fakestoreapi.com/products?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))


			fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/products/category/jewelery')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/products',{
            method:"POST",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/products/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    title: 'test product',
                    price: 13.5,
                    description: 'lorem ipsum set',
                    image: 'https://i.pravatar.cc',
                    category: 'electronic'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/products/7',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        title: 'test product',
                        price: 13.5,
                        description: 'lorem ipsum set',
                        image: 'https://i.pravatar.cc',
                        category: 'electronic'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))


				fetch('https://fakestoreapi.com/products/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/carts')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/carts/5')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/carts?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/carts?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/carts/startdate=2019-12-10&enddate=2020-10-10')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/carts/user/2')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/carts',{
				method:"POST",
				body:JSON.stringify(
					{
						userId:5,
						date:2020-02-03,
						products:[{productId:5,quantity:1},{productId:1,quantity:5}]
					}
				)
			})
				.then(res=>res.json())
				.then(json=>console.log(json))

				etch('https://fakestoreapi.com/carts/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                    userId:3,
                    date:2019-12-10,
                    products:[{productId:1,quantity:3}]
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/carts/7',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        userId:3,
                        date:2019-12-10,
                        products:[{productId:1,quantity:3}]
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))

				fetch('https://fakestoreapi.com/carts/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))


			fetch('https://fakestoreapi.com/users')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/users/1')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/users?limit=5')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/users?sort=desc')
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/users',{
            method:"POST",
            body:JSON.stringify(
                {
                    email:'John@gmail.com',
                    username:'johnd',
                    password:'m38rmF$',
                    name:{
                        firstname:'John',
                        lastname:'Doe'
                    },
                    address:{
                        city:'kilcoole',
                        street:'7835 new road',
                        number:3,
                        zipcode:'12926-3874',
                        geolocation:{
                            lat:'-37.3159',
                            long:'81.1496'
                        }
                    },
                    phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

			etch('https://fakestoreapi.com/users/7',{
            method:"PUT",
            body:JSON.stringify(
                {
                email:'John@gmail.com',
                username:'johnd',
                password:'m38rmF$',
                name:{
                    firstname:'John',
                    lastname:'Doe'
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:'1-570-236-7033'
                }
            )
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/users/7',{
                method:"PATCH",
                body:JSON.stringify(
                    {
                        email:'John@gmail.com',
                        username:'johnd',
                        password:'m38rmF$',
                        name:{
                            firstname:'John',
                            lastname:'Doe'
                        },
                        address:{
                            city:'kilcoole',
                            street:'7835 new road',
                            number:3,
                            zipcode:'12926-3874',
                            geolocation:{
                                lat:'-37.3159',
                                long:'81.1496'
                            }
                        },
                        phone:'1-570-236-7033'
                    }
                )
            })
                .then(res=>res.json())
                .then(json=>console.log(json))

				fetch('https://fakestoreapi.com/users/6',{
            method:"DELETE"
        })
            .then(res=>res.json())
            .then(json=>console.log(json))

			fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify({
                username: "mor_2314",
                password: "83r5^_"
            })
        })
            .then(res=>res.json())
            .then(json=>console.log(json))