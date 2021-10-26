import React, { Component } from 'react';
import './style.css'

class TodoList extends Component {
  constructor(props){
    super(props);
    this.state = {
        units: [
            {
                "unitName": "HQ",
                "children": [
                    {
                        "unitName": "AimeeTest",
                        "punitName": "HQ",
                        "children": [
                            {
                                "unitName": "Aimee子组织",
                                "punitName": "AimeeTest",
                                "hasChildren": false,
                                "unitCode": "A1002",
                                "unitId": "19b2a942-d650-48a9-99a6-90ddab61dfec",
                                "disabled": false,
                                "punitId": "e7a34be2-905d-44f8-bb7d-01b84b18d9c8"
                            }
                        ],
                        "hasChildren": true,
                        "unitCode": "A1001",
                        "unitId": "e7a34be2-905d-44f8-bb7d-01b84b18d9c8",
                        "disabled": false,
                        "punitId": "a55e73a7-841c-48ed-b879-24de26e89b34"
                    },
                    {
                        "unitName": "研发部门",
                        "punitName": "HQ",
                        "children": [
                            {
                                "unitName": "hrcc",
                                "punitName": "研发部门",
                                "hasChildren": false,
                                "unitCode": "hrcc",
                                "unitId": "0779b25d-88d0-429c-b85a-cf11b336dabb",
                                "disabled": false,
                                "punitId": "408eb52c-9e65-4b48-80d0-14dec1333f14"
                            }
                        ],
                        "hasChildren": true,
                        "unitCode": "dev",
                        "unitId": "408eb52c-9e65-4b48-80d0-14dec1333f14",
                        "disabled": false,
                        "punitId": "a55e73a7-841c-48ed-b879-24de26e89b34"
                    },
                    {
                        "unitName": "HULK01",
                        "punitName": "HQ",
                        "hasChildren": false,
                        "unitCode": "HULK01",
                        "unitId": "2474dd34-36a7-4f35-91c9-b0de72076ee5",
                        "disabled": false,
                        "punitId": "a55e73a7-841c-48ed-b879-24de26e89b34"
                    },
                    {
                        "unitName": "test",
                        "punitName": "HQ",
                        "children": [
                            {
                                "unitName": "test01",
                                "punitName": "test",
                                "hasChildren": false,
                                "unitCode": "test01",
                                "unitId": "84364b25-9eb0-4d6f-8f7b-af8156edf9a1",
                                "disabled": false,
                                "punitId": "aaf61b55-b694-4373-9ea7-3e3b09363ca6"
                            },
                            {
                                "unitName": "test02",
                                "punitName": "test",
                                "hasChildren": false,
                                "unitCode": "test02",
                                "unitId": "23785015-9460-4111-b748-aa33677f3ad5",
                                "disabled": false,
                                "punitId": "aaf61b55-b694-4373-9ea7-3e3b09363ca6"
                            },
                            {
                                "unitName": "test03",
                                "punitName": "test",
                                "children": [
                                    {
                                        "unitName": "zl",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "000",
                                        "unitId": "fcfa935e-5252-4e01-ab3c-af32fc7df4a7",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "zl01",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "01",
                                        "unitId": "6d41547c-750f-4b81-a470-79a072f0454f",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "汤002",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "tang0001",
                                        "unitId": "1d1fb221-c052-4a30-90d2-117f5e9701b0",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "test_01",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "test_01",
                                        "unitId": "e983f64d-7639-48f2-8460-0651dd5f8c09",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "test_02",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "test_02",
                                        "unitId": "c9ff6d8c-ec32-45ae-8aa3-ee0378823b1f",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "test_10",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "test_10",
                                        "unitId": "9e9854ce-70f3-4291-9dc1-22e461bc394c",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "test_11",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "test_11",
                                        "unitId": "c141ca16-48ed-4bac-930b-c4f9413f08ca",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "test_13",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "test_13",
                                        "unitId": "747c2c27-a6d4-4082-917c-44522f615f02",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "test_19",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "test_19",
                                        "unitId": "f3dcab14-6864-4007-b01e-4ae994a30412",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "test_23",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "test_23",
                                        "unitId": "137bc224-8377-4749-9724-3abe559ac285",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    },
                                    {
                                        "unitName": "test0301",
                                        "punitName": "test03",
                                        "hasChildren": false,
                                        "unitCode": "test0301",
                                        "unitId": "69baa96a-b5ee-457b-8395-59485e56285d",
                                        "disabled": false,
                                        "punitId": "312cbd1b-788e-4d55-af55-4a22079a1585"
                                    }
                                ],
                                "hasChildren": true,
                                "unitCode": "test03",
                                "unitId": "312cbd1b-788e-4d55-af55-4a22079a1585",
                                "disabled": false,
                                "punitId": "aaf61b55-b694-4373-9ea7-3e3b09363ca6"
                            }
                        ],
                        "hasChildren": true,
                        "unitCode": "test",
                        "unitId": "aaf61b55-b694-4373-9ea7-3e3b09363ca6",
                        "disabled": false,
                        "punitId": "a55e73a7-841c-48ed-b879-24de26e89b34"
                    }
                ],
                "hasChildren": true,
                "unitCode": "1000",
                "unitId": "a55e73a7-841c-48ed-b879-24de26e89b34",
                "disabled": false
            }
        ]
    }
  }

    render() {
        console.log(this.nestedToFlat(this.state.units))
        return <div>hotfix test2</div>;
  }

    nestedToFlat = (children) => {
        let arr = [];
        for (let i = 0; i < children.length; i++) {
            const item = children[i];
            arr.push({
                "unitName": item.unitName,
                "punitName": item.punitName || '',
                "hasChildren": item.hasChildren,
                "unitCode": item.unitCode,
                "unitId": item.unitId,
                "disabled": item.disabled,
                "punitId": item.punitId || null,
            });
            if (children[i].children) arr = arr.concat(this.nestedToFlat(children[i].children))
        }
        return arr
    }
}

export default TodoList;
