﻿using System;
using System.Collections.Generic;
using Dnn.PersonaBar.Library.Prompt;
using Dnn.PersonaBar.Library.Prompt.Attributes;
using Dnn.PersonaBar.Library.Prompt.Models;
using Dnn.PersonaBar.TaskScheduler.Components.Prompt.Models;
using DotNetNuke.Entities.Portals;
using DotNetNuke.Entities.Users;
using DotNetNuke.Instrumentation;
using DotNetNuke.Services.Scheduling;

namespace Dnn.PersonaBar.TaskScheduler.Components.Prompt.Commands
{
    [ConsoleCommand("set-task", "Updates a specific scheduled task with new information", new[]{
        "id",
        "enabled"
    })]
    public class SetTask : ConsoleCommandBase
    {
        private static readonly ILog Logger = LoggerSource.Instance.GetLogger(typeof(SetTask));

        private const string FlagId = "id";
        private const string FlagEnabled = "enabled";

        private int TaskId { get; set; }
        private bool Enabled { get; set; }

        public override void Init(string[] args, PortalSettings portalSettings, UserInfo userInfo, int activeTabId)
        {
            base.Init(args, portalSettings, userInfo, activeTabId);
            TaskId = GetFlagValue(FlagId, "Task Id", -1, true, true, true);
            Enabled = GetFlagValue(FlagEnabled, "Enabled", true,true);
        }

        public override ConsoleResultModel Run()
        {
            try
            {
                var taskToUpdate = SchedulingProvider.Instance().GetSchedule(TaskId);
                var tasks = new List<TaskModel>();

                if (taskToUpdate == null)
                    return new ConsoleErrorResultModel(string.Format(LocalizeString("Prompt_TaskNotFound"), TaskId));
                if (taskToUpdate.Enabled == Enabled)
                    return new ConsoleErrorResultModel(LocalizeString(Enabled ? "Prompt_TaskAlreadyEnabled" : "Prompt_TaskAlreadyDisabled"));

                taskToUpdate.Enabled = Enabled;
                SchedulingProvider.Instance().UpdateSchedule(taskToUpdate);
                tasks.Add(new TaskModel(taskToUpdate));
                return new ConsoleResultModel(LocalizeString("Prompt_TaskUpdated"))
                {
                    Records = tasks.Count,
                    Data = tasks
                };
            }
            catch (Exception exc)
            {
                Logger.Error(exc);
                return new ConsoleErrorResultModel(LocalizeString("Prompt_TaskUpdateFailed"));
            }
        }

        protected override string LocalResourceFile => Constants.LocalResourcesFile;
    }
}