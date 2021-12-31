# -*- coding: utf-8 -*-
"""
Tencent is pleased to support the open source community by making BK-ITSM 蓝鲸流程服务 available.

Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.

BK-ITSM 蓝鲸流程服务 is licensed under the MIT License.

License for BK-ITSM 蓝鲸流程服务:
--------------------------------------------------------------------
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software,
and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial
portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT
LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
"""

# Generated by Django 1.11.24 on 2020-12-09 11:48
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('sla', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SlaTicketHighlight',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('reply_timeout_color', models.CharField(max_length=32, verbose_name='预警单据背景色')),
                ('handle_timeout_color', models.CharField(max_length=32, verbose_name='超时单据背景色')),
            ],
        ),
        migrations.AlterModelOptions(
            name='schedule', options={'ordering': ['-id'], 'verbose_name': '服务运营时间', 'verbose_name_plural': '服务运营时间'},
        ),
        migrations.AlterModelOptions(
            name='sla', options={'ordering': ['-id'], 'verbose_name': '服务协议', 'verbose_name_plural': '服务协议'},
        ),
        migrations.AddField(
            model_name='actionpolicy',
            name='type',
            field=models.IntegerField(
                choices=[(1, '响应提醒'), (2, '响应超时'), (3, '处理提醒'), (4, '处理超时')], default=1, verbose_name='升级事件类型'
            ),
        ),
        migrations.AddField(
            model_name='prioritypolicy',
            name='reply_time',
            field=models.IntegerField(blank=True, null=True, verbose_name='应答时长'),
        ),
        migrations.AddField(
            model_name='prioritypolicy',
            name='reply_unit',
            field=models.CharField(
                choices=[('m', '分钟'), ('h', '小时'), ('d', '天')], default='m', max_length=32, verbose_name='应答时长单位'
            ),
        ),
        migrations.AddField(
            model_name='sla', name='is_reply_need', field=models.BooleanField(default=False, verbose_name='是否启用响应约定'),
        ),
        migrations.AlterField(
            model_name='action',
            name='action_type',
            field=models.CharField(
                choices=[('alert', '告警事件'), ('update_ticket', '更新单据信息')], max_length=32, verbose_name='事件类型'
            ),
        ),
        migrations.AlterField(
            model_name='day', name='day_of_week', field=models.CharField(default=-1, max_length=32, verbose_name='星期几'),
        ),
        migrations.AlterField(
            model_name='prioritymatrix',
            name='priority',
            field=models.CharField(blank=True, max_length=255, verbose_name='优先级'),
        ),
        migrations.AlterField(
            model_name='slatimerrule',
            name='condition_type',
            field=models.CharField(
                choices=[('START', '开始'), ('STOP', '结束'), ('PAUSE', '暂停')],
                default='START',
                max_length=64,
                verbose_name='条件类型',
            ),
        ),
    ]
