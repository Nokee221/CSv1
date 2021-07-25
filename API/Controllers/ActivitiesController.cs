using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Domain;
using Microsoft.AspNetCore.Mvc;
using Application.Activities;

namespace API.Controllers
{
    public class ActivitiesController : BaseApiController
    {
     
        [HttpGet]
        public async Task<ActionResult<List<Activity>>> GetActivities()
        {
            return await Mediator.Send(new List.Query());
        }

        [HttpGet("{id}")]
         public async Task<ActionResult<Activity>> GetActivitiy(Guid id)
        {
            return await Mediator.Send(new Details.Query{ID = id});
        }

        [HttpPost]
        public async Task<IActionResult> CreateActivity(Activity a)
        {
            return Ok(await Mediator.Send(new Create.Command {Activity = a}));
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> EditActivitiy(Guid Id , Activity activity)
        {
            activity.ID = Id;
            return Ok(await Mediator.Send(new Edit.Command{Activity = activity}));
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActivity(Guid id)
        {
            return Ok(await Mediator.Send(new Delete.Command{Id = id}));
        }
    }
}

