using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using ng2netcore.API.Models;

namespace ng2netcore.API.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        // GET api/values
        [HttpGet]
        public IEnumerable<DataItem> Get()
        {

            List<DataItem> dataItems = new List<DataItem>()
            {
                new DataItem {item1 = "dataItem #1",item2 = "dataItem #2",item3 = "dataItem #3"},
                new DataItem {item1 = "dataItem #A",item2 = "dataItem #B",item3 = "dataItem #C"}
            };
           return dataItems;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
