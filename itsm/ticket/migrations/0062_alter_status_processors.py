# Generated by Django 3.2.4 on 2021-09-07 11:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("ticket", "0061_auto_20210621_1206"),
    ]

    operations = [
        migrations.AlterField(
            model_name="status",
            name="processors",
            field=models.CharField(
                blank=True,
                default="",
                max_length=10000,
                null=True,
                verbose_name="处理人列表",
            ),
        ),
    ]
