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

# Generated by Django 1.11.24 on 2020-04-13 17:56
from __future__ import unicode_literals

from django.db import migrations, models
import jsonfield.fields


class Migration(migrations.Migration):

    dependencies = [
        ('workflow', '0027_auto_20200410_1745'),
    ]

    operations = [
        migrations.AlterModelManagers(name='taskschema', managers=[],),
        migrations.AddField(
            model_name='taskschema',
            name='can_edit',
            field=models.BooleanField(default=True, help_text='当为流程version引用的时候，不可编辑和查看', verbose_name='是否可编辑状态'),
        ),
        migrations.AlterField(
            model_name='workflow',
            name='extras',
            field=jsonfield.fields.JSONField(
                default={
                    'biz_related': False,
                    'need_urge': False,
                    'task_settings': {},
                    'urgers': '',
                    'urgers_type': 'EMPTY',
                },
                verbose_name='其他配置信息',
            ),
        ),
        migrations.AlterField(
            model_name='workflowversion',
            name='extras',
            field=jsonfield.fields.JSONField(
                default={
                    'biz_related': False,
                    'need_urge': False,
                    'task_settings': {},
                    'urgers': '',
                    'urgers_type': 'EMPTY',
                },
                verbose_name='其他配置信息',
            ),
        ),
    ]
